import React from 'react'
import Image from 'next/image'

import image from "../../_assets/7.gif"

function SectionFour() {
    return (
        <section className='text-white flex flex-col justify-center max-md:mt-[100px] items-center mb-[120px] max-sm:my-[60px] p-5' >
            <h1 className='text-[46px] max-xl:text-[44px] max-lg:text-[36px] max-md:text-[28px] max-sm:text-center' >Yolculuğunuzun Her Aşamasında Sizinle</h1>
            <p className='text-center text-[20px] mt-[20px] max-lg:text-[18px] max-md:text-[16px]' >İlk kripto al-sat deneyiminizden ilk NFT işleminize kadar, tüm süreç boyunca size rehberlik edeceğiz.</p>
            <video ty src='https://static.okx.com/cdn/assets/files/2210/D47D930F643E7A00.webm' style={{ viewTransitionName: "visible" }} muted autoPlay loop playsInline className='mt-[80px] max-sm:hidden'>
                <track kind='caption' />
            </video>
            <Image className='sm:hidden' alt='faa' src={image} />
        </section>
    )
}

export default SectionFour