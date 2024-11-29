'use client';

import { useEffect, useState } from 'react';

function Page2() {

    const [headerColor, setHeaderColor] = useState<string>('bg-blue-500');

    useEffect(() => {
        const savedColor = localStorage.getItem('headerColor');
        if (savedColor) {
            setHeaderColor(savedColor);
        }
    }, []);

    return (
        <>
            <header>
                <div className="max-w-full">
                    <div className={`${headerColor} flex justify-center text-center pt-4 pb-4 p-4 text-white`}>
                        <div className="col-span-8 gap-5">
                            <nav>
                                <ul className="flex text-white" style={{ fontSize: "1.1rem", gap: '4rem' }}>
                                    <li><a href="page2">
                                        Home</a></li>
                                    <li><a href="/page2">
                                        Shop</a></li>
                                    <li><a href="/page2">
                                        Pages</a></li>
                                    <li><a href="/page2">
                                        Blog</a></li>
                                    <li><a href="/page2">
                                        Contacts</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>

            <main className="p-8">
                <h2 className="text-2xl">Welcome to the Second Page!</h2>
                <p>The header color is dynamically set based on your choice.</p>
            </main>

        </>
    )
}

export default Page2;