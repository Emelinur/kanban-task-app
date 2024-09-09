import "./App.css";
import { NavBar } from "./components/NavBar";
import { SideBar } from "./components/SideBar";
import { SideBarFooter } from "./components/SideBarFooter";
import { useState } from "react";

export default function App() {
  const [visibilityMenu, setvisibilityMenu] = useState(true);
  const VisibilityBoard = () => {
    setvisibilityMenu(!visibilityMenu);
  };
  const [theme, setTheme] = useState("light");

  const themeClick = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <>
      <div className="flex flex-col h-screen">
        <NavBar theme={theme} />

        <div className="flex flex-grid h-screen">
          <SideBar visibilityMenu={visibilityMenu}
            themeClick={themeClick}
            theme={theme}/>
          <div className="max-sm:w-auto max-sm:h-auto flex flex-col justify-center items-center flex-grow">
            <p className="text-mediumGrey mb-4">
              This board is empty. Create a new column to get started.
            </p>
            <button className="bg-mainPurple rounded-full p-4 text-white">
              + Add New Column
            </button>
          </div>
        </div>

        <SideBarFooter
          VisibilityBoard={VisibilityBoard}
          visibilityMenu={visibilityMenu}
        />
      </div>
    </>
  );
}
