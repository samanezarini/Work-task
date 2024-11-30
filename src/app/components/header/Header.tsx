'use client';

import Link from 'next/link';
import { VscCloudDownload, VscPlayCircle } from "react-icons/vsc";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import { GiButterfly } from "react-icons/gi";


function Header() {
    return (
        <header className='flex justify-center items-center shadow-md'>
            <div className='flex flex-row-reverse justify-between text-center gap-16 pt-5 pb-5'>
                <div>
                    <div className=''>
                        <a href="/" className='flex'>
                            <p className='text-3xl'>لدیما</p>
                            <GiButterfly className='ms-2 w-8 h-8 bg-blue-600' />
                        </a>
                    </div>
                </div>
                <div className="col-span-8 gap-5">
                    <nav>
                        <ul className="flex flex-row-reverse text-black gap-16">
                            <li><a href="header" className='flex'>
                                فیلم معرفی <VscPlayCircle className='mt-1 mx-2' /></a></li>
                            <li><a href="header">
                                محصولات و خدمات</a></li>
                            <li><a href="header">
                                تماس باما</a></li>
                        </ul>
                    </nav>
                </div>
                <div className='flex flex-row-reverse gap-10 ps-28'>
                    <button className='flex bg-gray-300 py-1 px-6 h-8'>
                        <p className='me-2'>دانلود اپلیکیشن</p>
                        <VscCloudDownload className='mt-1' />
                    </button>
                    <button className='flex mt-1'>
                        سبد سفارش <IoCartOutline className='mt-1 mx-2' />
                    </button>
                    <button className='flex mt-1'>
                        ورود | ثبت نام <MdOutlineAccountCircle className='mt-1 ms-2' />
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;