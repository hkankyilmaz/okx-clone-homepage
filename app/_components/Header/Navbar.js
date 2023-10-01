"use client"

import React, { useState, useLayoutEffect, useRef, useEffect } from 'react'
import Image from 'next/image'
import logoImage from "../../_assets/okx.png"
import { LogoButton } from './styled'
import { headerInfo } from '@/app/_assets/headerInfo'
import { DropItem } from './styled'
import { IoIosArrowDown } from 'react-icons/io';
import gsap from 'gsap';


function Navbar() {

    return (
        <header className='h-[48px] flex items-center'>
            <Logo />
            <Seperator />
            <NavList />
        </header>
    )
}
export default Navbar


function Logo() {

    const [active, setActive] = useState({ left: true, right: false })

    return (
        <div className='flex items-center'>
            <Image width="82" height="36" className='mr-[5px]' alt='okx' src={logoImage} />
            <div className='text-[11px] text-white flex ml-[20px]'>
                <LogoButton onClick={() => setActive({ left: true, right: false })} $active={active.left} className='px-[12px] py-[5px] rounded-[3px' >Borsa</LogoButton>
                <LogoButton onClick={() => setActive({ left: false, right: true })} $active={active.right} className='px-[12px] py-[5px] rounded-[3px]' >Web3 Cüzdan</LogoButton>
            </div>
        </div>
    )
}

function Seperator() {
    return <div className='w-[1px] h-[16px] my-[16px] ml-[20px] mr-[10px] bg-[gray]' ></div>
}


function NavList() {


    const isAnimated = useRef({ status: false, index: null, isGoing: false });
    const refScope = useRef();
    const tl = useRef();
    const tl_ = useRef();

    const [ctx] = useState(() => gsap.context(() => { }), refScope);

    useLayoutEffect(() => {
        ctx.add('openDropItem', (idx) => {
            isAnimated.current.isGoing = true
            tl.current = gsap
                .timeline()
                .to(`.drop-item-${idx}`, { visibility: "visible", opacity: 1, duration: 0.2 })
                .from(`.drop-item-${idx}`, { y: 10, duration: 0.5 }, "<")
                .then(
                    () => (isAnimated.current = { index: idx, status: true, isGoing: false }),

                );
        });

        ctx.add('removeDropItem', (idx) => {
            tl_.current = gsap
                .timeline()
                .to(`.drop-item-${idx}`, { visibility: "hidden", opacity: 0, duration: 0.1 })

        });

        return () => ctx.revert();
    }, []);

    const handleHover = (idx) => {

        if (idx !== isAnimated.current.index) {
            ctx.revert();
            ctx.openDropItem(idx);
            ctx.removeDropItem(isAnimated.current.index)

        }
    }
    const handleLeave = (prop) => (event) => {

        if (event.target.tagName == "SPAN") {
            return;
        } else if (45 < event.clientY && event.clientY < 70) {
            return;
        } else {
            ctx.removeDropItem(isAnimated.current.index)
            isAnimated.current.status = false
            isAnimated.current.index = null
        }
    }
    const handleLeaveScopre = (event) => {

        console.log("deneme")

        let x = event.target.getBoundingClientRect().x
        let y = event.target.getBoundingClientRect().y

        let _x = event.clientX
        let _y = event.clientY

        if (event.target.tagName == "DIV" && (x < _x || event.clientX < _y)) {
            ctx.removeDropItem(isAnimated.current.index)
            isAnimated.current.status = false
            isAnimated.current.index = null
        }
    }

    return (
        <div ref={refScope} onMouseMove={(event) => handleLeaveScopre(event)} className='flex text-white'>
            {headerInfo.map((item, idx) => (
                <div onMouseEnter={(e) => handleHover(idx)} key={idx} className='flex cursor-pointer justify-center items-center px-[10px] relative'>
                    <span className='text-sm font-light' >{item.title} </span>
                    <span className='ml-1' > {idx == 6 ? undefined : <IoIosArrowDown size="0.85em" />} </span>
                    <DropDownMenu idx={idx} item={item} handleLeave={handleLeave} />
                </div>
            ))}
        </div>
    )
}

function DropDownMenu({ idx, item, handleLeave }) {

    return (
        <>
            <DropItem onMouseMove={handleLeave} onMouseLeave={handleLeave()} className={`drop-item-${idx}`} $idx={idx} >
                {item.subHeads ? item.subHeads?.map((item, idx) =>
                    <div key={`${idx}-a`} className='py-[12px] px-[12px] __xt--pp flex item-center cursor-pointer'>
                        <div className='flex flex-col w-full' >
                            <div className='text-[14px] text-black __xt'>{item.title} </div>
                            <div className='text-[12px] text-[gray] __xt'> {item.description}</div>
                            <div style={{ width: item.title == "Earn" ? "100%" : "60%" }} className='text-[14px] grid grid-cols-2 mt-1 text-black' >
                                {item?.subHeads?.map((item, idx) => (
                                    <div key={`${idx}-b`} className='mr-5' > {item.title} </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : item.sectionsHover ?
                    item.sectionsHover.map((item, idx) => (
                        <div key={`${idx}-z`} >
                            <div className='text-[gray]' > {item.title} </div>
                            {item.subHeads?.map((item, idx) =>
                                <div key={`${idx}-c`} className='py-[12px] px-[12px] __xt--pp flex item-center cursor-pointer'>
                                    <div className='flex flex-col w-full' >
                                        <div className='text-[14px] text-black __xt'>{item.title} </div>
                                        <div className='text-[12px] text-[gray] __xt'> {item.description}</div>
                                    </div>
                                </div>
                            )}
                        </div>

                    ))
                    : item.sections ?
                        <div className='flex'>
                            {item.sections?.map((item, idx) =>
                                <div key={`${idx}-d`} className='flex flex-col py-[12px] px-[12px] item-center cursor-pointer'>
                                    <div className='text-[12px] text-[gray] __xt' > {item.title} </div>
                                    {item.subHeads.map((item, idx) => (
                                        <div key={`${idx}-e`} className='text-[14px] p-2 flex text-black __xt--pp __xt' > {item.title} </div>
                                    ))}
                                </div>

                            )}
                        </div>
                        : undefined

                }
            </DropItem>
        </>
    )

}