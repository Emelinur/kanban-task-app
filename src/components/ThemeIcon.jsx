import { useState } from "react";

export function ThemeIcon({ themeClick, theme }) {
  return (
    <>
      <div className="flex justify-center items-center bg-lightGreyBG p-2 m-3 dark:bg-veryDarkGreyBG">
        {theme === "light" ? (
          <button
            onClick={themeClick}
            className="flex justify-between item-center"
          >
            <img
              src="..\src\assets\icon-light-theme.svg"
              alt=""
              className="p-2"
            />
            <img src="..\src\assets\leftcircle.svg" alt="" className="p-2" />
            <img
              src="..\src\assets\icon-dark-theme.svg"
              alt=""
              className="p-2"
            />
          </button>
        ) : (
          ""
        )}

        {theme === "dark" ? (
          <button
            onClick={themeClick}
            className="flex justify-between item-center"
          >
            <img
              src="..\src\assets\icon-light-theme.svg"
              alt=""
              className="p-2"
            />
            <img src="..\src\assets\rigthcircle.svg" alt="" className="p-2" />
            <img
              src="..\src\assets\icon-dark-theme.svg"
              alt=""
              className="p-2"
            />
          </button>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
