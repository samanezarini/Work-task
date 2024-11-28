import '@/app/globals.css';

function Button() {
    return (
      <>
        <div className="flex flex-col justify-center items-center p-10">
          <h1 className="text-2xl">Select an option :</h1>
          <div className="flex space-x-4 shadow-md p-16">
            <button className="bg-blue-500 w-28 text-white px-4 py-2 rounded-lg hover:bg-blue-400">
              Blue
            </button>
            <button className="bg-red-500 w-28 text-white px-4 py-2 rounded-lg hover:bg-red-400">
              Red
            </button>
            <button className="bg-yellow-500 w-28 text-white px-4 py-2 rounded-lg hover:bg-yellow-400">
              Yellow
            </button>
          </div>
        </div>
      </>
    );
  }
  
  export default Button;