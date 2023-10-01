import React from 'react'

function SectionTwo() {
    return (
        <section className='text-white flex flex-col justify-center items-center my-[120px max-sm:my-[60px] p-5' >
            <h1 className='text-[46px] max-xl:text-[44px] max-lg:text-[36px] max-md:text-[28px] max-sm:text-center' >Profesyonel İşlemler Yapın</h1>
            <p className='text-center text-[20px] mt-[20px] max-lg:text-[18px] max-md:text-[16px]' >En düşük İşlem Ücretleri,En Hızlı İşlemler,Güçlü API Desteği ve Daha Fazlası</p>
            <video className='mt-[80px]' src='https://static.okx.com/cdn/assets/files/2212/882D5049A31E763B.mp4' />
        </section>
    )
}

export default SectionTwo