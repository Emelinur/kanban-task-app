import "./App.css";
export default function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <p className="text-mediumGrey">This board is empty. Create a new column to get started.</p>
        <button className="bg-mainPurple rounded-full p-4 text-white">+ Add New Column</button>
      </div>
    </>
  );
}
