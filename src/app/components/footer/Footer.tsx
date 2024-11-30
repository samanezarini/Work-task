
function Footer() {

    return (
        <>
            <footer className="text-white bg-blue-600">
                <div className='flex justify-center items-center'>
                    <div className='container flex flex-row-reverse text-center w-[70rem] pt-5 pb-5'>
                        <div className='w-1/2 pt-5 pb-5 px-8 pl-10'>
                            <h2 className='text-xl mb-3 text-end'>
                                لدیما؛ دستیار آنلاین فروش مبتنی بر سفارش
                            </h2>
                            <p className="text-end">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                                طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                                لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                                بهبود ابزارهای کاربردی می‌باشدبرای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                                بهبود ابزارهای کاربردی می‌باشد.
                            </p>
                        </div>
                        <div className='w-2/2 pt-5 pb-5 px-8'>
                            <h2 className="text-xl mb-3 font-bold text-end">دسترسی سریع</h2>
                            <ul className="text-end leading-8">
                                <li>انواع چاپ</li>
                                <li>هدایای تبلیغاتی</li>
                                <li>طراحی تخصصی</li>
                                <li>چند رسانه ای</li>
                            </ul>
                        </div>
                        <div className='w-2/2 pt-5 pb-5 px-16'>
                            <h2 className="text-xl mb-3 font-bold text-end">اطلاعات تماس</h2>
                            <ul className="text-end">
                                <li>آدرس: تهران - پردیس - کدپستی 87878-1515</li>
                                <li>تلفن پشتیبانی: 123456789-021</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="text-white bg-blue-600">
                    <div className="flex flex-col justify-center items-center">
                        <hr className="w-[67rem] border-white" />
                        <p className="mt-4 text-right"> ۲۰۲۴ © -ارائه شده توسط لدیما</p>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer;