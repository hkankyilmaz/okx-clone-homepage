import React from 'react'
import Image from 'next/image'

import image1 from "../../_assets/1.webp"
import image2 from "../../_assets/2.webp"
import image3 from "../../_assets/3.webp"

function SectionsOne() {
    return (
        <section className='h-[calc(100vh-48px)] text-[whitesmoke] pt-[120px] px-[12px] flex flex-col relative' >
            <div className='flex'>
                <div className='flex flex-col w-[50%]'>
                    <div className='leading-[64px] text-[55px] max-w-[500px] font-bold' > Ortalama Kripto Borsalarından Daha Hızlı,Daha İyi,Daha Güçlü</div>
                    <div className='mt-[40px]'>
                        <input className='py-[14px] mr-5 px-[20px] border bg-transparent text-[20px]' placeholder='E-posta/Telefon' />
                        <button className='text-[20px] px-[44px] py-[23px] bg-white text-black rounded-[35px]' >OKX'I Deneyimleyin</button>
                    </div>
                    <div className='flex justify-start items-center mt-[100px]'>
                        <Image className='mr-10' width={185} height={75} src={image1} />
                        <Image className='mr-10' width={160} height={34} src={image2} />
                        <Image className='mr-10' width={64} height={64} src={image3} />
                    </div>
                </div>
                <div className='w-[50%] justify-center items-center pl-32' >
                    <video className='w-[279px] h-auto' src='https://static.okx.com/cdn/assets/files/237/218B8A2E8CF37E47.mp4' />
                </div>

            </div>
            <div className='ticker-container'>
                <div className='ticker-viewer'>
                    <div className='ticker-scroll infinite-animation delay-animation flex' >
                        {Array(20).fill("").map((item) => (
                            <span className='ticker-item' >BTC $27.175,00 (+%0,77)</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionsOne