import "./App.css";
import { NavBar } from "./components/NavBar";
import { SideBar } from "./components/SideBar";

import { SideBarFooter } from "./components/SideBarFooter";
import { useState } from "react";

export default function App({ handleBoardShow }) {
  const [visibilityMenu, setvisibilityMenu] = useState(true);
  const [selectedBoardName, setSelectedBoardName] = useState(""); 
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
      <div className="flex flex-col  h-screen ">
        <NavBar theme={theme} selectedBoardName={selectedBoardName}/>

        <div className="flex flex-row h-screen">
          <SideBar
            visibilityMenu={visibilityMenu}
            themeClick={themeClick}
            theme={theme}
            setSelectedBoardName={setSelectedBoardName}
            handleBoardShow={handleBoardShow}
          />
        </div>

        <div>
          <SideBarFooter
            VisibilityBoard={VisibilityBoard}
            visibilityMenu={visibilityMenu}
            
          />
        </div>
      </div>
    </>
  );
}
