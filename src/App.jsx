import "./App.css";
import { BoardContent } from "./components/BoardContent";
import { BoardHeader } from "./components/BoardHeader";
import { BoardNavbar } from "./components/BoardNavbar";
import BoardRoutes from "./BoardRoutes";
import { BoardFooter } from "./components/BoardFooter";
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
        <BoardHeader  theme={theme} />
        <div className="flex flex-grow">
          <BoardNavbar
            visibilityMenu={visibilityMenu}
            themeClick={themeClick}
            theme={theme}
          />
          <BoardRoutes />
          <BoardContent />
        </div>
        <BoardFooter
          VisibilityBoard={VisibilityBoard}
          visibilityMenu={visibilityMenu}
        />
      </div>
    </>
  );
}
