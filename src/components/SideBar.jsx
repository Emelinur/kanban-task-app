import "../App.css";
import { CreateNewBoard } from "./CreateNewBoard";
import { ThemeIcon } from "./ThemeIcon";
import { useState } from "react";

export function SideBar({ visibilityMenu, themeClick, theme }) {
  const [showBoard, setShowBoard] = useState(false);

  const newBoardClick = () => {
    setShowBoard(!showBoard);
  };

  return (
    <>
      <nav
        className={`w-80 bg-white flex flex-col justify-between border-r-2 border-border
          dark:bg-darkGrey dark:border-r-linesDark 
           ${visibilityMenu ? "block" : "hidden"}`}
      >
        <div className="w-72">
          <h5 className="text-xl text-mediumGrey mt-8 ml-6">ALL BOARDS ( 3 ) </h5>
          <div className="">
            <div className="hover:bg-mainPurple  hover:border-r-2 rounded-r-full border-r-mainPurple flex mt-3 p-3">
              <div className="flex items-center justify-center hover:brightness-0 hover:invert">
                <span className="ml-3 pr-4 ">
                  <img
                    src="..\src\assets\icon-board.svg"
                    alt="icon-board"
                    className="w-5 "
                  />
                </span>
                <span className="text-lg font-bold text-mediumGrey hover:brightness-0 hover:invert">
                  Platform Launch
                </span>
              </div>
            </div>
            <div className="hover:bg-mainPurple  hover:border-r-2 rounded-r-full border-r-mainPurple flex mt-2 p-3">
              <span className="flex items-center justify-center hover:brightness-0 hover:invert">
                <span className="ml-3 pr-4">
                  <img
                    src="..\src\assets\icon-board.svg"
                    alt=""
                    className="w-5"
                  />
                </span>
                <span className="text-lg font-bold text-mediumGrey">
                  Marketing Plan
                </span>
              </span>
            </div>
            <div className="hover:bg-mainPurple  hover:border-r-2 rounded-r-full border-r-mainPurple flex mt-2 p-3">
              <span className="flex items-center justify-center hover:brightness-0 hover:invert">
                <span className="ml-3 pr-4">
                  <img
                    src="..\src\assets\icon-board.svg"
                    alt=""
                    className="w-5"
                  />
                </span>
                <span className="text-lg font-bold text-mediumGrey">
                  Roadmap
                </span>
              </span>
            </div>
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
          <CreateNewBoard />
        </div>
      )}
    </>
  );
}
