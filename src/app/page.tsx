'use client';

import '@/app/globals.css'
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Services from './components/services/Services';


export default function Home() {
  return (
    // <div>
    //   <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
    //     <h1 className="text-2xl">Welcome to the Home Page</h1>
    //     <Link href="/page1">
    //       <button className="bg-blue-500 text-white px-4 py-2 rounded">Go to Page 1</button>
    //     </Link>
    //   </div>
    // </div>
    <div className='bg-gray-100 '>
      <Header />
      <Banner />
      <Services />
    </div>
  );
}