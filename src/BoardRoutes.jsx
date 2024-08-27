
import { Route, Router } from "react-router-dom";
import { Board } from "./components/Board";
export default function BoardRoutes(){
  return(
<>
<Router>
<Route path="/platformlaunch" element={<Board />}></Route>
</Router>
</>




  )
}