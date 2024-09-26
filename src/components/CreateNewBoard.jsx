import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export function CreateNewBoard({ onClose }) {
  const formRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const [name, setName] = useState("");
  const [columns, setColumns] = useState([]);
  const [ispending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const Board = { name, columns };

    setIsPending(true);

    fetch("http://localhost:8000/boards", {
      method: "POST",
      headers: { "Content-Type": "application/JSON" },
      body: JSON.stringify(Board),
    }).then(() => {
      console.log("new add board");
      setIsPending(false);
    });

    console.log(Board);
  };

  const [boardColumns, setBoardColumns] = useState([]);

  const addColumn = () => {
    const newCol = {
      id: uuidv4(),
      value: "",
    };
    setBoardColumns((prev) => [...prev, newCol]);
    setColumns((prev) => [...prev, ""]);
  };

  const handleInputChange = (index, event) => {
    const newColumns = [...columns];
    newColumns[index] = event.target.value;
    setColumns(newColumns);
  };

  const removeColumn = (index) => {
    setBoardColumns((prev) => prev.filter((_, i) => i !== index));
    setColumns((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <>
      <form
        ref={formRef}
        className="w-96 h-96 drop-shadow-xl"
        onSubmit={handleSubmit}
      >
        <div className="w-full bg-white p-5 dark:bg-darkGrey">
          <div className="pb-4">
            <h1 className="font-bold text-black dark:text-white">
              Add New Board
            </h1>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-6">
              <div className="sm:col-span-full">
                <label
                  htmlFor="name"
                  className="block text-sm font-bold leading-6 text-mediumGrey dark:text-white"
                >
                  Board Name
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 flex flex-col sm:grid-cols-6">
              <div className="sm:col-span-full m-2 ml-0">
                <label
                  htmlFor="columns"
                  className="block text-sm leading-6 text-mediumGrey font-bold dark:text-white"
                >
                  Board Columns
                </label>
              </div>

              {boardColumns.map((item, index) => (
                <div className="mt-2 flex" key={item.id}>
                  <div className="flex w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-gray-100 sm:max-w-md mb-2">
                    <input
                      type="text"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-black focus:ring-0 sm:text-sm sm:leading-6 dark:text-white"
                      value={columns[index]}
                      onChange={(e) => handleInputChange(index, e)}
                    />
                  </div>
                  <button
                    type="button"
                    className="m-2 ml-3 pr-4"
                    onClick={() => removeColumn(index)}
                  >
                    <img
                      src="..\src\assets\icon-cross.svg"
                      alt="icon-cross"
                      className="w-5"
                    />
                  </button>
                </div>
              ))}
              <button
                type="button"
                className="w-full rounded-full bg-mainPurpleLight px-3 py-2 text-sm font-bold shadow-sm hover:bg-mainPurpleHover text-mainPurple dark:bg-white"
                onClick={addColumn}
              >
                + Add New Column
              </button>
            </div>
          </div>
          {!ispending && (
            <button
              type="submit"
              value="Create New Board"
              className="w-full rounded-full bg-mainPurple px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-mainPurpleHover"
            >
              Create New Board
            </button>
          )}
          {ispending && (
            <button
              disabled
              type="submit"
              value="Create New Board"
              className="w-full rounded-full bg-mainPurple px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-mainPurpleHover"
            >
              Adding Board...
            </button>
          )}
        </div>
      </form>
    </>
  );
}
