import "./App.css";
import { BoardContent } from "./components/BoardContent";
import { BoardHeader } from "./components/BoardHeader";

import { BoardNavbar } from "./components/BoardNavbar";

export default function App() {
  return (
    <div className="flex h-screen">
      <BoardNavbar/>
      <div className="flex flex-col flex-grow">
      <BoardHeader/>
      <BoardContent/>
        
      </div>
    </div>
  );
}
