import "./App.css";
import { BoardContent } from "./components/BoardContent";
import { BoardHeader } from "./components/BoardHeader";
import { BoardNavbar } from "./components/BoardNavbar";
import BoardRoutes from "./BoardRoutes";
export default function App() {
  return (
    <div className="flex h-screen">
      <BoardNavbar />
      <div className="flex flex-col flex-grow">
        <BoardHeader />
        <BoardRoutes />
        <BoardContent/>
      </div>
    </div>
  );
}
