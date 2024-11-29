'use client';

import '@/app/globals.css';
import { useRouter } from "next/navigation";

function Page1() {
  const router = useRouter();

  const handleButtonClick = (color: string) => {
    localStorage.setItem('headerColor', color);
    router.push('/component/page2');
  };

    return (
      <>
        <div className="flex flex-col justify-center items-center p-10">
          <h1 className="text-2xl">Select an option :</h1>
          <div className="flex space-x-4 shadow-md p-16">
            <button className="bg-blue-500 w-28 text-white px-4 py-2 rounded-lg hover:bg-blue-400"
            onClick={() => handleButtonClick('bg-blue-500')}>
              Blue
            </button>
            <button className="bg-red-500 w-28 text-white px-4 py-2 rounded-lg hover:bg-red-400"
             onClick={() => handleButtonClick('bg-red-500')}>
              Red
            </button>
            <button className="bg-yellow-500 w-28 text-white px-4 py-2 rounded-lg hover:bg-yellow-400"
             onClick={() => handleButtonClick('bg-yellow-500')}>
              Yellow
            </button>
          </div>
        </div>
      </>
    );
  }
  
  export default Page1;