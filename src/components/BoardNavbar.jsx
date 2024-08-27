import { NavLink } from "react-router-dom";
export function BoardNavbar() {
  return (
    <>
      <nav className="max-sm:w-auto max-sm:h-auto w-300  bg-white border-r-2 border-border flex flex-col ">
        <NavLink to="/"><img className="w-2/4  m-7" src="src/assets/logo-dark.svg" alt="logo" /></NavLink>
        <div className="w-276">
          <h5 className="text-xl m-7">ALL BOARDS ( 3 ) </h5>
          <div className="hover:bg-mainPurple hover:border-r-2 rounded-r-full  flex mt-3 items-center p-2">
            <span className="ml-4 pr-4">
              <img src="..\src\assets\icon-board.svg" alt="" className="w-5" />
            </span>
            <NavLink
              className="text-lg font-bold text-mediumGrey  hover:text-white"
              to="/platformlaunch"
            >
              Platform Launch
            </NavLink>
          </div>
          <div className="hover:bg-mainPurple hover:border-r-2 rounded-r-full flex mt-3 items-center p-2">
            <span className="ml-4 pr-4">
              <img
                src="..\src\assets\icon-board.svg"
                alt="icon-board"
                className="w-5 hover:bg-white"
              />
            </span>

            <NavLink
              className="text-lg font-bold text-mediumGrey hover:text-white"
              to="/marketingplan"
            >
              Marketing Plan
            </NavLink>
          </div>
          <div className="hover:bg-mainPurple hover:border-r-2 rounded-r-full  flex mt-3 items-center p-2">
            <span className="ml-4 pr-4">
              <img src="..\src\assets\icon-board.svg" alt="" className="w-5" />
            </span>
            <NavLink  className="text-lg font-bold text-mediumGrey hover:text-white" to="/roadmap">Roadmap</NavLink>
          </div>
          <div className=" flex mt-3 p-2 items-center">
            <span className="ml-4 pr-4">
              <img src="..\src\assets\icon-board.svg" alt="" className="w-5" />
            </span>
            <NavLink className=" text-lg text-mainPurple font-bold" to="createnewboard"> +Create New Board</NavLink>  
          </div>
        </div>

        <div className=" max-sm:h-screen flex flex-col justify-end h-screen">
          <div className="ml-4 bg-lightGreyBG  p-6 w-251 h-3 flex justify-center items-center ">
            <img
              src="..\src\assets\icon-light-theme.svg"
              alt="icon-ligth"
              className="p-3"
            />
            <img src="..\src\assets\Group 8.svg" alt="" className="p-3" />
            <img
              src="..\src\assets\icon-dark-theme.svg"
              alt=""
              className="p-3"
            />
          </div>
          <button className=" flex  items-center mb-5 ">
            <img
              className="p-4 ml-4"
              src="..\src\assets\icon-hide-sidebar.svg"
              alt="icon-hide"
            />
            <p className="text-lg text-mediumGrey">Hide Sidebar</p>
          </button>
        </div>
      </nav>
    </>
  );
}
