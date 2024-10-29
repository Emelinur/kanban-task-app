
export function EditBoardForm() {


  return (
    <>
     <form className="w-96 h-96 drop-shadow-xl">
        <div className="w-full bg-white p-5 dark:bg-darkGrey">
          <div className="pb-4">
            <h1 className="font-bold text-black dark:text-white">
            Edit Board
            </h1>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-6">
              <div className="sm:col-span-full">
                <label
                  htmlFor="name"
                  className="block text-sm font-bold leading-6 text-mediumGrey dark:text-white"
                >
                  Board Name
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 flex flex-col sm:grid-cols-6">
              <div className="sm:col-span-full m-2 ml-0">
                <label
                  htmlFor="columns"
                  className="block text-sm leading-6 text-mediumGrey font-bold dark:text-white"
                >
                  Board Columns
                </label>
              </div>

                <div className="mt-2 flex">
                  <div className="flex w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-gray-100 sm:max-w-md mb-2">
                    <input
                      type="text"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-black focus:ring-0 sm:text-sm sm:leading-6 dark:text-white"
                     placeholder="Todo"
                    />
                  </div>
                  <button
                    type="button"
                    className="m-2 ml-3 pr-4"
                    
                  >
                    <img
                      src="..\src\assets\icon-cross.svg"
                      alt="icon-cross"
                      className="w-5"
                    />
                  </button>
                </div>
                <div className="mt-2 flex">
                  <div className="flex w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-gray-100 sm:max-w-md mb-2">
                    <input
                      type="text"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-black focus:ring-0 sm:text-sm sm:leading-6 dark:text-white"
                     placeholder="Doing"
                    />
                  </div>
                  <button
                    type="button"
                    className="m-2 ml-3 pr-4"
                    
                  >
                    <img
                      src="..\src\assets\icon-cross.svg"
                      alt="icon-cross"
                      className="w-5"
                    />
                  </button>
                </div>
                <div className="mt-2 flex">
                  <div className="flex w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-gray-100 sm:max-w-md mb-2">
                    <input
                      type="text"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-black focus:ring-0 sm:text-sm sm:leading-6 dark:text-white"
                     placeholder="Done"
                    />
                  </div>
                  <button
                    type="button"
                    className="m-2 ml-3 pr-4"
                  >
                    <img
                      src="..\src\assets\icon-cross.svg"
                      alt="icon-cross"
                      className="w-5"
                    />
                  </button>
                </div>
         
              <button
                type="button"
                className="w-full rounded-full bg-mainPurpleLight px-3 py-2 text-sm font-bold shadow-sm hover:bg-mainPurpleHover text-mainPurple dark:bg-white"
                
              >
                + Add New Column
              </button>
            </div>
          </div>
         
            <button
              type="submit"
              value="Create New Board"
              className="w-full rounded-full bg-mainPurple px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-mainPurpleHover"
            >
            Save Changes
            </button>
        
        </div>
      </form>
    </>
  );
}
