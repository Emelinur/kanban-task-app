export function DeleteBoard() {

    return(

    <>
     <form className="w-96 h-96 drop-shadow-xl">
        <div className="w-full bg-white p-5 dark:bg-darkGrey">
            <h1 className="font-bold text-red dark:text-red m-2">
            Delete this board?
            </h1>
         <div className="w-full bg-white dark:bg-darkGrey m-4">
            <p className="text-mediumGrey ">Are you sure you want to delete the ‘Platform Launch’ board? This action will remove all columns and tasks and cannot be reversed.</p>
         </div>
          <div className="flex justify-between">
          <button
              type="submit"
              value="Create New Board"
              className="w-40 rounded-full bg-red px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-redHover"
            >
            Delete
            </button>
            <button
              type="submit"
              value="Create New Board"
              className="w-40  rounded-full  bg-mainPurpleLight px-3 py-2 text-sm font-semibold text-mainPurple shadow-sm hover:bg-mainPurpleHover dark:bg-white "
            >
            Cancel
            </button>
          </div>
        
        </div>
      </form>
    </>)
}