import { useEffect, useState } from "react";

export function Board() {
  const [boardCol, setboardCol] = useState([]);

  useEffect(() => {
    try {
      fetch("http://localhost:8000/boards")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setboardCol(data);
        });
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <>
      <div className="w-6/12 flex flex-row justify-between items-start  ">
        <div className="flex flex-row h-full m-2w-screen">
          {boardCol &&
            boardCol.map((boards) =>
              boards.columns.map((column, columnIndex) => {
                if (column.name === "Todo") {
                  return (
                    <div
                      key={columnIndex}
                      className=" flex flex-col items-start m-1 ml-2"
                    >
                      <div className="flex justify-start items-center mb-4">
                        <img
                          src="src\assets\OvalTodo.svg"
                          alt="OvalTodo"
                          className="w-4 mr-2"
                        />
                        <p className=" text-lg text-mediumGrey">{column.name}</p>
                      </div>
                      {column.tasks.map((task,taskIndex)=>(
                      <div key={taskIndex} className="flex flex-col bg-white p-4 w-80 dark:bg-darkGrey">
                        <div className="h-20 ">
                          <p className="font-bold dark:text-white">
                            {task.title}
                          </p>
                          <span className="text-mediumGrey ">
                            0 of 6 substasks
                          </span>
                        </div>
                      </div>
                      ))}
                    </div>
                  );
                }

                if (column.name === "Doing") {
                  return (
                    <div
                      key={columnIndex}
                      className=" flex flex-col items-start m-1 ml-2"
                    >
                      <div className="flex justify-start items-center mb-4">
                        <img
                          src="src\assets\OvalDoing.svg"
                          alt="OvalDoing"
                          className="w-4 mr-2"
                        />
                        <p className=" text-lg text-mediumGrey">
                          {column.name}
                        </p>
                      </div>
                      {column.tasks.map((task,taskIndex)=>(
                      <div key={taskIndex} className="flex flex-col bg-white dark:bg-darkGrey p-4 w-80">
                        <div className="h-20 ">
                          <p className="font-bold dark:text-white">
                          {task.title}d
                          </p>
                          <span className="text-mediumGrey">
                            1 of 3 substasks
                          </span>
                        </div>
                      </div>
                      ))}
                    </div>
                  );
                }

                if (column.name == "Done") {
                  return (
                    <div
                      key={columnIndex}
                      className=" flex flex-col items-start m-1 ml-2"
                    >
                      <div className="flex justify-start items-center mb-4">
                        <img
                          src="src\assets\OvalDone.svg"
                          alt="OvalDone"
                          className="w-4 mr-2"
                        />
                        <p className="text-lg text-mediumGrey">{column.name}</p>
                      </div>
                      {column.tasks.map((task,taskIndex)=>(
                      <div key={taskIndex} className="flex flex-col bg-white dark:bg-darkGrey p-4 w-80">
                        <div className="h-20 ">
                          <p className="font-bold dark:text-white">
                          {task.title}
                          </p>
                          <span className="text-mediumGrey">
                            1 of 1 substasks
                          </span>
                        </div>
                      </div>
                      ))}
                    </div>
                  );
                }
              })
            )}

          <div className="flex justify-center items-center w-80  bg-linear dark:bg-darkGrey mt-12 ml-2">
            <button className="flex justify-center items-center text-mediumGrey text-2xl font-bold">
              + New Column
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
