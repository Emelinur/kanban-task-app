import "../App.css";
import { NavLink } from "react-router-dom";
import { ThemeIcon } from "./ThemeIcon";
import { useState } from "react";
import { Board } from "./Board";
export function BoardNavbar({ visibilityMenu, themeClick, theme, newBoard }) {
  const [showBoard, setShowBoard] = useState(false);

  const newBoardClick = () => {
    setShowBoard(!showBoard);
  };

  return (
    <>
      <nav
        className={`w-300  bg-white flex flex-col justify-between border-r-2 border-border
          dark:bg-darkGrey dark:border-r-linesDark
           ${visibilityMenu ? "block" : "hidden"}`}
      >
        <div className="w-276">
          <h5 className="text-xl m-7">ALL BOARDS ( 3 ) </h5>
          <div className="hover:bg-mainPurple  hover:border-r-2 rounded-r-full border-r-mainPurple   flex mt-3 p-2">
            <span className="flex items-center justify-center hover:brightness-0 hover:invert">
              <span className="ml-7 pr-4 ">
                <img
                  src="..\src\assets\icon-board.svg"
                  alt="icon-board"
                  className="w-5 "
                />
              </span>
              <NavLink
                className="text-lg font-bold text-mediumGrey hover:brightness-0 hover:invert"
                to="/platformlaunch"
              >
                Platform Launch
              </NavLink>
            </span>
          </div>
          <div className="hover:bg-mainPurple hover:border-r-2 rounded-r-full  border-r-mainPurple  flex mt-3 items-center p-2">
            <span className="flex items-center justify-center hover:brightness-0 hover:invert">
              <span className="ml-7 pr-4">
                <img
                  src="..\src\assets\icon-board.svg"
                  alt=""
                  className="w-5"
                />
              </span>
              <NavLink
                className="text-lg font-bold text-mediumGrey"
                to="/marketingplan"
              >
                Marketing Plan
              </NavLink>
            </span>
          </div>
          <div className="hover:bg-mainPurple hover:border-r-2 rounded-r-full  border-r-mainPurple   flex mt-3 items-center p-2">
            <span className="flex items-center justify-center hover:brightness-0 hover:invert">
              <span className="ml-7 pr-4">
                <img
                  src="..\src\assets\icon-board.svg"
                  alt=""
                  className="w-5"
                />
              </span>
              <NavLink
                className="text-lg font-bold text-mediumGrey"
                to="/roadmap"
              >
                Roadmap
              </NavLink>
            </span>
          </div>
          <div className=" flex mt-3 p-2 items-center ">
            <span className="ml-7 pr-4">
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
          <Board newBoard={newBoard} />
        </div>
      )}
    </>
  );
}
