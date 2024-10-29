import { useEffect, useState } from "react";
import { EditBoardForm } from "./EditBoardForm";
import { DeleteBoard } from "./DeleteBoard";

export function NavBar({ theme, selectedBoardName }) {
  const [showOptions, setShowOptions] = useState(false);

  const toogleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <>
      <header className="flex w-full bg-white dark:bg-darkGrey">
        <div className="w-80 border-border border-r-2 dark:bg-darkGrey dark:border-r-linesDark p-2">
          {theme === "light" ? (
            <img className="p-5" src="src/assets/logo-dark.svg" alt="logo" />
          ) : (
            <img className="p-5" src="src/assets/logo-light.svg" alt="logo" />
          )}
        </div>
        <div className="flex flex-grow items-center justify-between dark:bg-darkGrey ">
          <h1 className="text-xl font-bold text-darkGrey p-2 m-3 dark:text-white">
            {selectedBoardName}
          </h1>
          <div className="flex items-center mr-2">
            <button className="max-sm:p-2 max-sm:w-max max-sm:text-sm  bg-mainPurpleHover rounded-full p-3  text-white hover:bg-mainPurple">
              + Add New Task
            </button>
            <button className="p-3" onClick={toogleOptions}>
              <img src="..\src\assets\icon-vertical-ellipsis.svg" alt="" />
            </button>
            {showOptions && (
              <div className="flex flex-col absolute mt-40 bg-white shadow-lg p-4 w-40">
                <button>Edit Board</button>
                <button>Delete Board</button>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
