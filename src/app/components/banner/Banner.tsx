import background from './public/hard-light.jpg'

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
                    <div className="bg-white text-gray-950 py-2 rounded-lg font-medium">چند رسانه‌ای</div>
                    <div className="bg-white text-gray-950 py-2 rounded-lg font-medium">طراحی تخصصی</div>
                    <div className="bg-white text-gray-950 py-2 rounded-lg font-medium">هدایای تبلیغاتی</div>
                    <div className="bg-white text-gray-950 py-2 rounded-lg font-medium">انواع چاپ</div>
                </div>
            </div>
        </div>


    );
}

export default Banner;