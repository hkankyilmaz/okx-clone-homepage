import React from 'react'
import Image from 'next/image'
import image from "../../_assets/okx.png"

function SectionFive() {
    return (
        <section className='text-white max-xl:mt-[100px] mt-[200px] max-xl:flex max-xl:flex-col  ' >

            <div className='mb-[50px] max-xl:flex max-xl:flex-col max-xl:items-center '>
                <h1 className=' text-[46px] max-xl:text-[44px] max-lg:text-[36px] max-md:text-[28px] max-xl:text-center' >OKX nedir ?</h1>
                <p className='xl:max-w-[600px] max-xl:w-[75%] max-xl:text-center max-sm:text-center text-[20px] mt-[20px] max-lg:text-[18px] max-md:text-[16px]' >Birinci sınıf iş ortaklarımızın yardımıyla neden yeni favori kripto uygulamanızın biz olduğunu öğrenin</p>
            </div>
            <div className='flex justify-between items-center mb-[100px] max-xl:flex-col' >
                <button className='h-[68px] text-[20px] w-[200px] bg-white text-black rounded-[50px] max-xl:mb-10' >Keşfet</button>
                <Image className='max-sm:hidden' width={374} height={147} alt='faa' src={image} />
                <Image className='sm:hidden' width={230} height={70} alt='faa' src={image} />
            </div>
            <div className='flex justify-center items-center max-sm:flex-col [&>video]:mb-10'>
                <video ty src='https://static.okx.com/cdn/assets/files/2210/B961D658AE174818.mp4' controls poster='https://static.okx.com/cdn/assets/imgs/2211/30151288EAF5AEE6.jpg?x-oss-process=image/format,webp' playsInline className='w-[33%] max-sm:w-[90%] max-sm:mr-0 mr-5 max-lg:w-[200px] h-auto flex items-start'>
                    <track kind='caption' />
                </video>
                <video ty src='https://static.okx.com/cdn/assets/files/2210/D583B0A2F58732CD.mp4' controls poster='https://static.okx.com/cdn/assets/imgs/2211/8D4C3E2605F69059.jpg?x-oss-process=image/format,webp' playsInline className='w-[33%] mr-5 max-sm:w-[90%] max-sm:mr-0   max-lg:w-[200px] h-auto flex items-start'>
                    <track kind='caption' />
                </video>
                <video ty src='https://static.okx.com/cdn/assets/files/2210/CCAA7B610D3D33D4.mp4' controls poster='https://static.okx.com/cdn/assets/imgs/2211/EF1304B5D4D9DB3E.jpg?x-oss-process=image/format,webp' playsInline className='w-[33%] mr-5 max-sm:w-[90%] max-lg:w-[200px] max-sm:mr-0  h-auto flex items-start'>
                    <track kind='caption' />
                </video>
            </div>
        </section>
    )
}

export default SectionFive