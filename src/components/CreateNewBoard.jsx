import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export function CreateNewBoard() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleInputType = (event) => {
    console.log(event.target);
  };
  const [columns, setColumns] = useState([]);
  const addColumn = () => {
    const newCol = {
      id: uuidv4(),
      element: (
        <div className="flex w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-gray-100 sm:max-w-md mb-2">
          <input
            type="text"
            name="columns"
            id="columns"
            autoComplete="columns"
            className="block flex-1 border-0 bg-transparent py-1.5 pl-1  text-black focus:ring-0 sm:text-sm sm:leading-6 dark:text-white"
            placeholder=""
          />
        </div>
      ),
    };
    setColumns((prev) => [...prev, newCol]);
  };
  const removeColumn = (index) => {
    setColumns((prev) => prev.filter((_, i) => i !== index));
  };
  return (
    <>
      <form className="w-480 h-429 r drop-shadow-xl " onSubmit={handleSubmit}>
        <div className="w-full bg-white p-5 dark:bg-darkGrey">
          <div className="border-b border-gray-900/10 pb-4 ">
            <h1 className=" font-bold  text-black dark:text-white">
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
                      name="name"
                      id="name"
                      autoComplete="name"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="e.g Web Desing"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 flex flex-col sm:grid-cols-6">
              <div className="sm:col-span-full m-2 ml-0 ">
                <label
                  htmlFor="columns"
                  className="block text-sm leading-6 text-mediumGrey font-bold dark:text-white"
                >
                  Board Columns
                </label>
              </div>
              {columns.map((item, index) => (
                <div className="mt-2 flex" key={item.id}>
                  {item.element}

                  <button
                    type="reset"
                    className="m-2"
                    onClick={() => removeColumn(index)}
                  >
                    <img src="..\src\assets\icon-cross.svg" alt="icon-cross" />
                  </button>
                </div>
              ))}
              <button
                type="button"
                className=" w-full rounded-full bg-mainPurpleLight px-3 py-2 text-sm font-bold shadow-sm hover:bg-mainPurpleHover text-mainPurple dark:bg-white "
                onClick={addColumn}
              >
                + Add New Column
              </button>
            </div>
          </div>
          <button
            type="submit"
            className=" w-full rounded-full bg-mainPurple px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-mainPurpleHover"
          >
            Create New Board
          </button>
        </div>
      </form>
    </>
  );
}