import "../App.css";
import { Board } from "./Board";
import { CreateNewBoard } from "./CreateNewBoard";
import { ThemeIcon } from "./ThemeIcon";
import { useEffect, useState } from "react";

export function SideBar({ visibilityMenu, themeClick, theme, }) {

  const [boards, setBoards] = useState([]);
  useEffect(() => {
    try{
    fetch("http://localhost:8000/boards")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBoards(data);
      })
    }catch(error){
console.error(error)
    }
  }, []);
  

  const [showBoard, setShowBoard] = useState(false);
  const newBoardClick = () => {
    setShowBoard(!showBoard);
  };
  const handleClose = () => {
    setShowBoard(false);
  };

  const [selectedBoard, setSelectedBoard] = useState(null);

const handleBoardClick = (boardName)=>{
  setSelectedBoard(boardName)
  console.log(setSelectedBoard(boardName))
}

 

  return (
    <>
      <nav
        className={`w-80 bg-white flex flex-col justify-between border-r-2 border-border
          dark:bg-darkGrey dark:border-r-linesDark 
           ${visibilityMenu ? "block" : "hidden"}`}
      >
        <div className="w-72">
          <h5 className="text-xl text-mediumGrey mt-8 ml-6">
            ALL BOARDS ({boards.length})
          </h5>
          <div className="">
            {boards.map((board) => (
              <div
                className="hover:bg-mainPurple  hover:border-r-2 rounded-r-full border-r-mainPurple flex mt-2 p-3"
                key={board.id}
                onClick={() => handleBoardClick(board.name)}
              >
                <span className="flex items-center justify-center hover:brightness-0 hover:invert">
                  <span className="ml-3 pr-4">
                    <img
                      src="..\src\assets\icon-board.svg"
                      alt=""
                      className="w-5"
                    />
                  </span>
                  <button className="text-lg font-bold text-mediumGrey" onClick={handleBoardNameClick}>
                    {board.name} 
                  </button> 
                </span>
              </div>
            ))}
          </div>
          <div className=" flex mt-2 p-3 items-center ">
            <span className="ml-3 pr-4">
              <img src="..\src\assets\icon-board.svg" alt="" className="w-5" />
            </span>
            <button
              className=" text-lg text-mainPurple font-bold"
              onClick={newBoardClick}
            >
              +Create New Board
            </button>
          </div>
        </div>
        <ThemeIcon themeClick={themeClick} theme={theme} />
      </nav>

      {showBoard && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 drop-shadow-sm ">
          <CreateNewBoard onClose={handleClose} />
        </div>
      )}
          {/* Board bileşenini render ederek seçilen tahtayı prop olarak iletin */}
          {selectedBoard && <Board boardName={selectedBoard} />}
    </>
  );
}
