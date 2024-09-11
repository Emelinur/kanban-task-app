export function Board() {
  return (
    <>
      <div className="flex justify-between items-start w-auto h-auto">
        <div className="flex flex-row">
          <div className="flex">
            <img src="src\assets\OvalTodo.svg" alt="OvalTodo" />
            <p className="m-2 text-xl text-mediumGrey">TODO (4)</p>
          </div>

          <div className="flex">
            <img src="src\assets\OvalDoing.svg" alt="OvalDoing" />
            <p className="m-2 text-xl text-mediumGrey">DOING (6)</p>
          </div>

          <div className="flex ">
            <img src="src\assets\OvalDone.svg" alt="OvalDone" />
            <p className="m-2 text-xl text-mediumGrey">DONE (7)</p>
          </div>
        </div>
        <div className=" flex  justify-center item-center h-screen bg-linear">
          <p className="text-mediumGrey flex justify-center item-center ">+ New Column</p>
        </div>
      </div>
    </>
  );
}
 