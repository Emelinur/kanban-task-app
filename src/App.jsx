import "./App.css";
import { createGlobalStyle } from "styled-components";
import { Navbar } from "./components/Navbar";
import { SideBar } from "./components/Sidebar";
const GlobalStyle = createGlobalStyle`
  body {
    background-color: #F4F7FD;
    width: 1140px;
    height: 1024px;
    margin: 0;
    padding: 0;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;

  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      {/* <SideBar /> */}
    </>
  );
}

export default App;
