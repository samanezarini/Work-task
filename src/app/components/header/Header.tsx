'use client';

import Link from 'next/link';


function Header() {
    return (
        <header>
            <div className="max-w-full h-[4.5rem] shadow-md">
                <div className='container flex flex-row-reverse justify-between text-center pt-5 pb-5'>
                    <div>
                        <div className='px-5'>
                            <a href="/" className=''>لدیما</a>
                        </div>
                    </div>
                    <div className="col-span-8 gap-5">
                        <nav>
                            <ul className="flex flex-row-reverse text-black gap-16">
                                <li><a href="header">
                                    فیلم معرفی</a></li>
                                <li><a href="header">
                                    محصولات و خدمات</a></li>
                                <li><a href="header">
                                    تماس باما</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className='flex flex-row-reverse gap-10 ps-28'>
                        <button className='bg-gray-300 py-1 px-6'>
                            دانلود اپلیکیشن
                        </button>
                        <button>
                            سبد سفارش
                        </button>
                        <button>
                            ورود | ثبت نام
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;