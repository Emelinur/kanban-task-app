export function BoardContent() {
  return (
    <>
      <div className="max-sm:w-auto max-sm:h-auto flex flex-col justify-center items-center flex-grow">
        <p className="text-mediumGrey mb-4">
          This board is empty. Create a new column to get started.
        </p>
        <button className="bg-mainPurple rounded-full p-4 text-white">
          + Add New Column
        </button>
      </div>
    </>
  );
}
