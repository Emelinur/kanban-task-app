export function BoardNavbar() {
  return (
    <>
      <nav className="text-3xl w-300 bg-white border-r-2 border-border flex flex-col">
        <img className="w-2/4  m-7" src="src/assets/logo-dark.svg" alt="logo" />

        <div className="w-276">
          <h5 className="text-xl m-7">ALL BOARDS ( 3 ) </h5>
          <div className="hover:bg-mainPurple hover:border-r-2 rounded-r-full  flex mt-3 items-center p-2">
            <span className="ml-4 pr-4">
              <img src="..\src\assets\icon-board.svg" alt="" className="w-5" />
            </span>
            <a
              href=""
              className="text-lg font-bold text-mediumGrey  hover:text-white"
            >
              Platform Launch
            </a>
          </div>
          <div className="hover:bg-mainPurple hover:border-r-2 rounded-r-full flex mt-3 items-center p-2">
            <span className="ml-4 pr-4">
              <img
                src="..\src\assets\icon-board.svg"
                alt=""
                className="w-5 hover:bg-white"
              />
            </span>
            <a
              href=""
              className="text-lg font-bold text-mediumGrey hover:text-white"
            >
              Marketing Plan
            </a>
          </div>
          <div className="hover:bg-mainPurple hover:border-r-2 rounded-r-full  flex mt-3 items-center p-2">
            <span className="ml-4 pr-4">
              <img src="..\src\assets\icon-board.svg" alt="" className="w-5" />
            </span>
            <a
              href=""
              className="text-lg font-bold text-mediumGrey hover:text-white"
            >
              Roadmap
            </a>
          </div>
          <div className=" flex mt-3 p-2 items-center">
            <span className="ml-4 pr-4">
              <img src="..\src\assets\icon-board.svg" alt="" className="w-5" />
            </span>
            <a href="" className=" text-lg text-mainPurple font-bold">
              +Create New Board
            </a>
          </div>
        </div>

        <div>
          <div className=" mt-56 ml-4 bg-lightGreyBG  p-6 w-251 h-3 flex justify-center items-center">
            <span>
              <img
                src="..\src\assets\icon-light-theme.svg"
                alt=""
                className="p-3"
              />
            </span>
            <span>
              <img src="..\src\assets\Group 8.svg" alt="" className="p-3" />
            </span>
            <span>
              <img
                src="..\src\assets\icon-dark-theme.svg"
                alt=""
                className="p-3"
              />
            </span>
          </div>
          <div className=" flex  items-center mb-5 ">
            <img
              className="p-4 ml-4"
              src="..\src\assets\icon-hide-sidebar.svg"
              alt=""
            />
            <p className="text-lg text-mediumGrey">Hide Sidebar</p>
          </div>
        </div>
      </nav>
    </>
  );
}
