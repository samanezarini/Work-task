import background from './public/hard-light.jpg'
import { LuNewspaper } from "react-icons/lu";

function Banner() {


    return (
        <div className='flex justify-center items-center mt-10'>
            <div className="w-[70rem] h-[30rem] bg-blue-700 text-white py-16 px-4 text-center">
                <div className="max-w-4xl mx-auto mt-52">
                    <h1 className="text-4xl font-bold mb-4">هر چیز که در جستن آنی ... آنی</h1>
                    <button className="text-black bg-orange-500 px-3 py-1 rounded-2xl text-lg hover:bg-orange-600 transition">
                        کانون تبلیغات آریا
                    </button>
                </div>
                
                <div className="flex justify-center w-[55rem] bg-gray-100 ml-20 py-4 mt-16 shadow-md">
                    <div className="container mx-auto flex justify-center space-x-8">
                        {["چند رسانه ای", "طراحی تخصصی", "هدایای تبلیغاتی", "انواع چاپ"].map(
                            (item) => (
                                <button
                                    key={item}
                                    className="text-black font-semibold hover:bg-blue-600 px-4 py-2 rounded-lg transition"
                                >
                                    {item}
                                </button>
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;