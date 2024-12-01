'use client';

import Link from 'next/link';
import { VscCloudDownload, VscPlayCircle } from "react-icons/vsc";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import { GiButterfly } from "react-icons/gi";


function Header() {
    return (
        <header className='flex justify-center items-center shadow-md'>
            <div className='container flex justify-between text-center w-[70rem] pt-5 pb-5'>
                <div>
                    <div className=''>
                        <a href="/" className='flex'>
                            <GiButterfly className='w-8 h-8 bg-blue-600' />
                            <p className='text-3xl mr-2'>لدیما</p>
                        </a>
                    </div>
                </div>
                <div className="col-span-8 gap-5 mt-2">
                    <nav>
                        <ul className="flex text-black gap-16">
                            <li><a href="header" className='flex'>
                              <VscPlayCircle className='mt-1 mx-2' />  فیلم معرفی </a></li>
                            <li><a href="header">
                                محصولات و خدمات</a></li>
                            <li><a href="header">
                                تماس باما</a></li>
                        </ul>
                    </nav>
                </div>
                <div className='flex gap-12 mr-8 text-gray-950'>
                    <button className='flex bg-gray-300 py-1 px-6 h-8'>
                        <VscCloudDownload className='mt-1' />
                        <p className='me-2 mx-2'>دانلود اپلیکیشن</p>
                    </button>
                    <button className='flex mt-1'>
                       <IoCartOutline className='mt-1 mx-2' /> سبد سفارش 
                    </button>
                    <button className='flex mt-1'>
                       <MdOutlineAccountCircle className='mt-1 mx-2' /> ورود | ثبت نام 
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;