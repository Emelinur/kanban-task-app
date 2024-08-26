export function BoardHeader() {
  return (
    <>
      <header className="max-sm:w-auto max-sm:h-auto  bg-white text-darkGrey p-4 flex justify-between items-center ">
        <h1 className="text-xl font-bold">Platform Launch</h1>
        <div className="flex items-center">
          <button className="max-sm:p-2 max-sm:w-max max-sm:text-sm  bg-mainPurpleHover    rounded-full p-4  text-white hover:bg-mainPurple">
            + Add New Task
          </button>
          <button className="p-3">
            <img src="..\src\assets\icon-vertical-ellipsis.svg" alt="" />
          </button>
        </div>
      </header>
    </>
  );
}
