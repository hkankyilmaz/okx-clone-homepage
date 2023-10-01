"use client"

import React, { useState, useLayoutEffect, useRef, useContext, useEffect } from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import { AiOutlineClose } from 'react-icons/ai';
import Context from '@/app/_context/context';
import gsap from 'gsap';


function MobileNavBar() {

    const { isMobileOpen, setIsMobileOpen } = useContext(Context);
    const first = useRef(false);
    const onGoing = useRef(false);

    useEffect(() => {
        if (first && isMobileOpen) ctx.openMenu()
        if (first && !isMobileOpen) ctx.closeMenu()

        first.current == true
    }, [isMobileOpen])

    const ref = useRef();
    const tl = useRef();
    const tl_ = useRef();
    const isGoingAnime = useRef(false)

    const [ctx] = useState(() => gsap.context(() => { }), ref);

    useLayoutEffect(() => {
        ctx.add('openMenu', () => {
            isGoingAnime.current = true
            tl.current = gsap
                .timeline()
                .set(ref.current, { display: "initial", duration: 0.1 })
                .to(ref.current, { x: 0, opacity: 1, duration: 0.3 })
                .then(isGoingAnime.current = false)

        });

        ctx.add('closeMenu', () => {
            tl.current = gsap
                .timeline()
                .set(ref.current, { display: "none", opacity: 0, duration: 0.1 })
                .to(ref.current, { x: -100, opacity: 0, duration: 0.1 })
        });

        ctx.add('openMobileSubMenu', (i) => {
            onGoing.current = true
            tl.current = gsap
                .timeline()
                .to(`.mobile-sub-item-${i}`, { height: "auto", duration: 0.3 })
                .to(`.icn-${i}`, { rotate: 180, duration: 0.3 })
                .then(onGoing.current = false)
        });

        ctx.add('closeMobileSubMenu', (i) => {
            onGoing.current = true
            tl.current = gsap
                .timeline()
                .to(`.mobile-sub-item-${i}`, { height: "50px", duration: 0.3 })
                .to(`.icn-${i}`, { rotate: 360, duration: 0.3 })
                .then(onGoing.current = false)
        });

        return () => ctx.revert();
    }, []);

    const arr = ["Kripto Satın Al", "Keşfet", "Al-Sat", "Finans", "Oluştur", "Kurumsal", "Akademi", "Daha Fazlası", "Desktek", "Türkçe/USD"]

    const handleClick = (i) => (event) => {
        console.log(onGoing.current)
        if (!onGoing.current) {
            if (event.target.dataset.isanimated == "false") {
                ctx.openMobileSubMenu(i)
                event.target.dataset.isanimated = "true";
            } else {
                ctx.closeMobileSubMenu(i)
                event.target.dataset.isanimated = "false";
            }
        }

    }

    return (
        <div ref={ref} className='z-10 font-light overflow-y-auto absolute h-[100vh] md:w-[500px] text-[whitesmoke] w-[100vw] bg-[#121212] right-0 translate-x-[100%] flex flex-col justify-start pt-14 pb-5 px-5 md:px-10 items-start'>


            <div className='flex justify-start items-center mb-4' >
                <div className='border px-2 py-2 rounded-xl  mr-3 max-md:text-sm' >Kayıt Ol</div>
                <div className='mr-3 max-md:hidden' >Giriş Yap</div>
            </div>
            <div className='flex justify-start items-center w-full mb-4' >
                {["Borsa", "Web3 Cüzdan"].map((item, i) => (
                    <div className='w-[40%] max-md:text-sm border py-2 px-4 rounded-xl mr-3' key={i} > {item} </div>
                ))}
            </div>
            <div className='w-full pl-1'>
                {arr.map((item, i) => (
                    <div key={i} className={`h-[50px] overflow-hidden mobile-sub-item-${i}  ${![8, 9].includes(i) ? "xl+:hidden" : ""}`}>
                        <div className='flex justify-between pt-3'>  <span> {item} </span> <IoIosArrowDown data-isanimated="false" onClick={handleClick(i)} className={`cursor-pointer icn-${i}`} /> </div>
                        <div className='pl-4 pt-2' >Lorem Ipsum</div>
                        <div className='pl-4' >Lorem Ipsum</div>
                        <div className='pl-4' >Lorem Ipsum</div>
                    </div>
                ))}
            </div>
            <div className='w-[80%] border py-2 px-4 rounded-xl mt-5 mr-3' >OKX Mobil Uygulamasını İndir</div>
            <div onClick={() => setIsMobileOpen(false)} className='absolute text-white right-5 top-5 cursor-pointer' > <AiOutlineClose /> </div>

        </div>
    )
}

export default MobileNavBar