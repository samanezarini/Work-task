import '@/app/globals.css';

function Page2() {

    return (
        <>
            <header>
                <div className="max-w-full">
                    <div className="flex justify-center text-center pt-4 pb-4 bg-blue-500">
                        <div className="col-span-8 gap-5">
                            <nav>
                                <ul className="flex text-white" style={{ fontSize: "1.1rem", gap: '4rem' }}>
                                    <li><a href="">
                                        Home</a></li>
                                    <li><a href="">
                                        Shop</a></li>
                                    <li><a href="">
                                        Pages</a></li>
                                    <li><a href="">
                                        Blog</a></li>
                                    <li><a href="">
                                        Contacts</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Page2;