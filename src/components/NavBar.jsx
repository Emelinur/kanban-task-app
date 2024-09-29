import { useEffect } from "react";

export function NavBar({ theme,selectedBoardName  }) {


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
          <h1 className="text-xl font-bold text-darkGrey p-2 m-3 dark:text-white"  
          >
   {selectedBoardName }
          </h1>
          <div className="flex items-center mr-2">
            <button className="max-sm:p-2 max-sm:w-max max-sm:text-sm  bg-mainPurpleHover rounded-full p-3  text-white hover:bg-mainPurple">
              + Add New Task
            </button>
            <button className="p-3">
              <img src="..\src\assets\icon-vertical-ellipsis.svg" alt="" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
