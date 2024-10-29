import { useEffect, useState } from "react";

export function Board({ boardName }) {
  const [boardCol, setboardCol] = useState([]);

  useEffect(() => {
    try {
      fetch("http://localhost:8000/boards")
        .then((res) => res.json())
        .then((data) => {
          const selectedBoard = data.find( (board) => board.name.toLowerCase() === boardName.toLowerCase()); // Tahta adına göre veriyi bul
          if (selectedBoard) {
            setboardCol([selectedBoard]);
          }
        });
    } catch (err) {
      console.error(err);
    }
  }, [boardName]);

  return (
    
    <div className="w-6/12 flex flex-row justify-between items-start">
      <div className="flex flex-row h-full m-2 w-screen">
   {boardCol.length > 0 && boardCol.map((board) =>
  board.columns && Array.isArray(board.columns) ? (
    board.columns.map((column, columnIndex) => (
      <div key={columnIndex} className="flex flex-col items-start m-1 ml-2">
        <div className="flex justify-start items-center mb-4">
          <img
            src={`src/assets/Oval${column.name}.svg`}
            alt={column.name}
            className="w-4 mr-2"
          />
          <p className="text-lg text-mediumGrey">{column.name}</p>
        </div>
        {column.tasks && Array.isArray(column.tasks) && column.tasks.map((task, taskIndex) => (
          <button key={taskIndex} className="flex flex-col bg-white p-4 w-80 m-2
           dark:bg-darkGrey">
            <div className="h-20">
              <p className="font-bold dark:text-white">{task.title || 'Yeni Görev'}</p>
              <span className="text-mediumGrey">
                {task.subtasks?.length || 0} of {task.subtasks?.length || 0} alt görev
              </span>
            </div>
          </button>
        ))}
      </div>
    ))
  ) : (
    <div>No columns found.</div> // Hata mesajı
  )
)}
        <div className="flex justify-center items-center w-80  bg-linear dark:bg-darkGrey mt-12 ml-2">
          <button className="flex justify-center items-center text-mediumGrey text-2xl font-bold">
            + Yeni Sütun
          </button>
        </div>
      </div>
    </div>
  );
}