"use client"

import React, { useRef, useState } from 'react'
import Image from 'next/image'

import image1 from "../../_assets/4.png"
import image2 from "../../_assets/5.png"
import image3 from "../../_assets/6.png"

import gsap from "gsap"

function SectionThree() {

    const ref1 = useRef()
    const ref2 = useRef()
    const ref3 = useRef()
    const ref4 = useRef()
    const statu = useRef(false)

    const [no, setNo] = useState(1)

    const style = "flex justify-center items-center border rounded-3xl border-transparent cursor-pointer"

    const handClick = (i) => {

        if (statu.current == false) {

            if (i == 1) {
                statu.current = true
                gsap.to(ref1.current, { borderRadius: "1.5rem", color: "black", backgroundColor: "white", duration: 1 }).then(statu.current = false).then(setNo(1))
                gsap.from(ref4.current, { autoAlpha: 0, y: 20, duration: 0.4 })
                gsap.to(ref2.current, { color: "white", backgroundColor: "black", duration: 0.6 }).then(statu.current = false)
                gsap.to(ref3.current, { color: "white", backgroundColor: "black", duration: 0.6 }).then(statu.current = false)

            } else if (i == 2) {
                statu.current = true
                gsap.to(ref2.current, { color: "black", backgroundColor: "white", duration: 0.6 }).then(statu.current = false).then(setNo(2))
                gsap.from(ref4.current, { autoAlpha: 0, y: 20, duration: 0.4 })
                gsap.to(ref1.current, { color: "white", backgroundColor: "black", duration: 0.6 }).then(statu.current = false)
                gsap.to(ref3.current, { color: "white", backgroundColor: "black", duration: 0.6 }).then(statu.current = false)

            } else if (i == 3) {
                statu.current = true
                gsap.to(ref3.current, { color: "black", backgroundColor: "white", duration: 0.6 }).then(statu.current = false).then(setNo(3))
                gsap.from(ref4.current, { autoAlpha: 0, y: 20, duration: 0.4 })
                gsap.to(ref1.current, { color: "white", backgroundColor: "black", duration: 0.6 }).then(statu.current = false)
                gsap.to(ref2.current, { color: "white", backgroundColor: "black", duration: 0.6 }).then(statu.current = false)

            }
        }
    }

    return (
        <section className='flex justify-center items-center max-lg:py-[0] py-[120px] px-[12px] max-lg:flex-col-reverse'>
            <div className='w-[50%] flex justify-center items-center' > <Image alt='faa' className='max-w-[300px] rounded-[30px]' src={no == 1 ? image1 : no == 2 ? image2 : image3} /> </div>
            <div className='text-white w-[50%] max-sm:w-[100%] flex flex-col justify-center items-center' >
                <h1 className='text-[46px] max-xl:text-[44px] max-lg:text-[36px] max-md:text-[28px] text-center max-lg:mt-10' >Tek Platform, Sinirsiz Özellik</h1>
                <div className=' w-[486px] max-lg:w-[300px] h-[66px] my-[28px] grid grid-cols-3 border p-1 rounded-3xl'>
                    <span ref={ref1} onClick={() => handClick(1)} className={style} >Lite</span>
                    <span ref={ref2} onClick={() => handClick(2)} className={style} >Web3</span>
                    <span ref={ref3} onClick={() => handClick(3)} className={style} >Pro</span>
                </div>
                <div ref={ref4} className='h-[200px] max-sm:h-[150px] max-sm:w-full'>
                    {no == 1 ?
                        <p className='text-center text-[20px] mt-[20px] max-lg:text-[18px] max-md:text-[16px]' >Tüm favori zincirlerinizi destekleyen dünyanın en iyi NFT Piyasası,DEXİ'i ve cüzdanını keşfedin.</p>
                        : no == 2 ?
                            <p className='text-center text-[20px] mt-[20px] max-lg:text-[18px] max-md:text-[16px]' >Kriptoda yeni misiniz? Hiç sorun değil. Tek dokunuşla 5 USD değerinde bile kripto satın alabilir ve ilerledikçe becerilerinizi geliştirebilirsiniz.</p>
                            :
                            <p className='text-center text-[20px] mt-[20px] max-lg:text-[18px] max-md:text-[16px]' >Marjinli ve vadeli işlemler, güçlü API’ler ve al-sat botları ile hareket halindeyken bir profesyonel gibi alım satım yapabilirsiniz.</p>
                    }
                </div>
            </div>


        </section>
    )
}

export default SectionThree