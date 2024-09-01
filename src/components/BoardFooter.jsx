import { useState } from "react";
export function BoardFooter({ VisibilityBoard, visibilityMenu }) {
  return (
    <>
      <button
        className={`w-300 flex items-center bg-white border-r-2 border-border  transition-all duration-500 ease-in-out dark:bg-darkGrey dark:border-r-linesDark
           ${visibilityMenu ? "block" : "closeMenu"}`}
        onClick={VisibilityBoard}
      >
        <div className=" flex  items-center">
          <img
            className={`p-4 ml-4 ${visibilityMenu ? "" : "hidden"}`}
            src="..\src\assets\icon-hide-sidebar.svg"
            alt="hide-sidebar"
          />
          <img
            className={`p-4  tra ${visibilityMenu ? "hidden" : "closeMenu"}`}
            src="..\src\assets\eye.svg"
            alt="icon-eye-closed"
          />
          <p
            className={`text-lg text-mediumGrey ${
              visibilityMenu ? "block" : "hidden"
            }`}
          >
            Hide Sidebar
          </p>
        </div>
      </button>
    </>
  );
}
