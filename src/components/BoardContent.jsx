export function BoardContent(){
  return(
      <>
          <div className="flex flex-col justify-center items-center flex-grow">
        <p className="text-mediumGrey mb-4">
          This board is empty. Create a new column to get started.
        </p>
        <button className="bg-mainPurple rounded-full p-4 text-white">
          + Add New Column
        </button>
      </div>
      </>
  )
}