import { Route, Routes } from "react-router-dom";
import { Board } from "./components/Board";

export default function BoardRoutes() {
  return (
    <Routes>
      <Route path="/platformlaunch" element={<Board />} />
      <Route path="/marketingplan" element={<Board />} />
      <Route path="/roadmap" element={<Board />} />
    </Routes>
  );
}
