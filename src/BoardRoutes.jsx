import { Route, Routes } from "react-router-dom";
import { BoardContent } from "./components/BoardContent";

export default function BoardRoutes() {
  return (
    <Routes>
      <Route path="/platformlaunch" element={<BoardContent />} />
      <Route path="/marketingplan" element={<BoardContent />} />
      <Route path="/roadmap" element={<BoardContent />} />
    </Routes>
  );
}
