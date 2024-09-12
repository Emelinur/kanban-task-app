export function Board() {
  return (
    <>
      <div className="flex flex-row justify-between items-start m-2">

        <div className=" flex flex-col items-start m-2">
          <div className="flex justify-start items-center mb-4">
            <img src="src\assets\OvalTodo.svg" alt="OvalTodo" className="w-5 mr-2" />
            <p className=" text-xl text-mediumGrey">TODO (4)</p>
          </div>

          <div className="flex flex-col bg-white p-4 w-80">
            <div className="h-20 ">
              <p className="font-bold">Build UI for onboarding flow</p>
              <span className="text-mediumGrey">0 of 6 substasks</span>
            </div>
          </div>
        </div>

        <div className=" flex flex-col items-start m-2">
          <div className="flex justify-start items-center mb-4">
            <img
              src="src\assets\OvalDoing.svg"
              alt="OvalDoing"
              className="w-5 mr-2"
            />
            <p className=" text-xl text-mediumGrey">DOING (6)</p>
          </div>
          
          <div className="flex flex-col bg-white p-4 w-80">
            <div className="h-20 ">
              <p className="font-bold">Design settings and search pages</p>
              <span className="text-mediumGrey">1 of 3 substasks</span>
            </div>
          </div>
        </div>

        <div className=" flex flex-col items-start m-2">
          <div className="flex justify-start items-center mb-4">
            <img src="src\assets\OvalDone.svg" alt="OvalDone" className="w-5 mr-2" />
            <p className="text-xl text-mediumGrey">DONE (7)</p>
          </div>
              
          <div className="flex flex-col bg-white p-4 w-80">
            <div className="h-20 ">
              <p className="font-bold">Conduct 5 wireframe tests</p>
              <span className="text-mediumGrey">1 of 1 substasks</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-80 h-full bg-linear mt-16 ">
          <p className="flex justify-center items-center text-mediumGrey text-2xl font-bold">
            + New Column
          </p>
        </div>
      
      </div>
   
    </>
  );
}
