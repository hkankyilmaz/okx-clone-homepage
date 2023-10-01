import React from 'react'
import Image from 'next/image'

import image1 from "../../_assets/1.webp"
import image2 from "../../_assets/2.webp"
import image3 from "../../_assets/3.webp"

function SectionsOne() {
    return (
        <section className='min-h-[calc(100vh-48px)] text-[whitesmoke] pt-[120px] max-sm:pt-[70px] px-[12px] flex flex-col relative' >
            <div className='flex max-md:flex-col'>
                <div className='flex flex-col max-md:w-[100%] max-md:justify-center max-md:items-center w-[50%]'>
                    <div className='leading-[64px] text-[55px] max-xl:text-[46px] max-w-[500px] font-bold max-lg:text-[32px] max-sm:text-[28px] max-sm:text-center'> Ortalama Kripto Borsalarından Daha Hızlı,Daha İyi,Daha Güçlü</div>
                    <div className='mt-[40px] max-md:flex max-md:flex-col max-md:justify-center max-md:items-center'>
                        <input className='py-[14px] max-lg:mr-0 max-lg:py-3 mr-5 px-[20px] border bg-transparent text-[20px] mb-8 max-sm:text-[16px]' placeholder='E-posta/Telefon' />
                        <button className='text-[20px] max-lg:py-3 px-[44px] py-[23px] bg-white text-black rounded-[35px] max-sm:text-[16px]' >OKX'I Deneyimleyin</button>
                    </div>
                    <div className='flex justify-start items-center mt-[100px] max-sm:hidden'>
                        <Image alt='faa' className='mr-10' width={185} height={75} src={image1} />
                        <Image alt='faa' className='mr-10' width={160} height={34} src={image2} />
                        <Image alt='faa' className='mr-10' width={64} height={64} src={image3} />
                    </div>
                    <div className='flex justify-start items-center mt-[100px] sm:hidden translate-x-5 mb-3'>
                        <Image alt='faa' className='mr-10' width={80} height={40} src={image1} />
                        <Image alt='faa' className='mr-10' width={80} height={20} src={image2} />
                        <Image alt='faa' className='mr-10' width={45} height={45} src={image3} />
                    </div>
                </div>
                <div className='w-[50%] max-lg:w-[100%] max-lg:mt-10 max-lg:pb-24 flex justify-center items-center' >
                    <video ty src='https://static.okx.com/cdn/assets/files/237/218B8A2E8CF37E47.mp4' style={{ viewTransitionName: "visible" }} muted autoPlay loop playsInline className='w-[279px] max-lg:w-[200px] h-auto flex items-start'>
                        <track kind='caption' />
                    </video>

                </div>

            </div>
            <div className='ticker-container'>
                <div className='ticker-viewer'>
                    <div className='ticker-scroll infinite-animation delay-animation flex' >
                        {Array(20).fill("").map((item, i) => (
                            <span key={i} className='ticker-item' >BTC $27.175,00 (+%0,77)</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionsOne