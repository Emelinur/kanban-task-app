import { Route, Routes } from "react-router-dom";
import { BoardEmpty } from "./components/BoardEmpty";


export default function BoardRoutes() {
  return (
    <Routes>
      <Route path="/platformlaunch" element={<BoardEmpty/>} />
      <Route path="/marketingplan" element={<BoardEmpty/>} />
      <Route path="/roadmap" element={<BoardEmpty/>} />
    </Routes>
  );
}
