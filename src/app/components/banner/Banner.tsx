import background from './public/hard-light.jpg'
import { LuNewspaper } from "react-icons/lu";

function Banner() {


    return (
        <div className='flex justify-center items-center mt-10'>
            <div className="w-[70rem] h-[30rem] bg-blue-700 text-white py-16 px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold mb-4">هر چیز که در جستن آنی ... آنی</h1>
                    <button className="bg-orange-500 text-white px-6 py-3 rounded-2xl text-lg hover:bg-orange-600 transition">
                        کانون تبلیغات آریا
                    </button>
                </div>

                <div className="container grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                    <div className="bg-white text-gray-950 py-2 rounded-lg flex">چند رسانه‌ای</div>
                    <div className="bg-white text-gray-950 py-2 rounded-lg flex">طراحی تخصصی</div>
                    <div className="bg-white text-gray-950 py-2 rounded-lg flex">هدایای تبلیغاتی</div>
                    <div className="bg-white text-gray-950 py-2 rounded-lg flex">
                        <p>انواع چاپ</p>
                        <LuNewspaper />
                    </div>
                </div>
                
                <div className="bg-blue-800 py-4">
                    <div className="container mx-auto flex justify-center space-x-8">
                        {["چند رسانه ای", "طراحی تخصصی", "هدایای تبلیغاتی", "انواع چاپ"].map(
                            (item) => (
                                <button
                                    key={item}
                                    className="text-white font-semibold hover:bg-blue-600 px-4 py-2 rounded-lg transition"
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