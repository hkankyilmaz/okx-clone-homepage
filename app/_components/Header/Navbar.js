"use client"

import React, { useState, useLayoutEffect, useRef, useEffect, useContext } from 'react'
import Context from '@/app/_context/context'
import Image from 'next/image'
import logoImage from "../../_assets/okx.png"
import { LogoButton } from './styled'
import { headerInfo } from '@/app/_assets/headerInfo'
import { DropItem } from './styled'
import { IoIosArrowDown } from 'react-icons/io';
import { AiOutlineSearch, AiOutlineMenu, AiOutlineQuestionCircle, AiOutlineBell } from 'react-icons/ai';
import { BsDownload } from 'react-icons/bs';
import { TbWorld } from 'react-icons/tb';
import gsap from 'gsap';


function Navbar() {

    const [inside, setInside] = useState()
    return (
        <header className='h-[48px] flex items-center w-full justify-between'>
            <div className='flex' >
                <Logo />
                <Seperator setInside={setInside} />
                <NavList inside={inside} setInside={setInside} />
            </div>
            <Others />
        </header>
    )
}
export default Navbar


function Logo() {

    const [active, setActive] = useState({ left: true, right: false })

    return (
        <div className='flex items-center'>
            <Image width="82" height="36" className='mr-[5px]' alt='okx' src={logoImage} />
            <div className='text-[11px] text-white flex ml-[20px] max-md:hidden'>
                <LogoButton onClick={() => setActive({ left: true, right: false })} $active={active.left} className='px-[12px] py-[5px] rounded-[3px' >Borsa</LogoButton>
                <LogoButton onClick={() => setActive({ left: false, right: true })} $active={active.right} className='px-[12px] py-[5px] rounded-[3px]' >Web3 Cüzdan</LogoButton>
            </div>
        </div>
    )
}

function Seperator({ setInside }) {
    return <div onMouseEnter={() => setInside(prev => !prev)} className='max-md:hidden  w-[1px] h-[16px] my-[16px] ml-[20px] md:mr-[10px] bg-[gray]' ></div>
}

function NavList({ inside, setInside }) {

    useEffect(() => {
        ctx.revert();
        isAnimated.current.index = null
    }, [inside])


    const isAnimated = useRef({ status: false, index: null, isGoing: false });
    const refScope = useRef();
    const tl = useRef();


    const [ctx] = useState(() => gsap.context(() => { }), refScope);

    useLayoutEffect(() => {
        ctx.add('openDropItem', (idx) => {
            isAnimated.current.isGoing = true
            tl.current = gsap
                .timeline()
                .to(`.drop-item-${idx}`, { visibility: "visible", opacity: 1, duration: 0.1 })
                .from(`.drop-item-${idx}`, { y: 10, duration: 0.1 }, "<")
                .then(
                    () => (isAnimated.current = { index: idx, status: true, isGoing: false }),

                );
        });

        ctx.add('removeDropItem', (idx) => {
            tl.current = gsap
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
    const handleLeave = (event) => {

        ctx.removeDropItem(isAnimated.current.index)
        isAnimated.current.status = false
        isAnimated.current.index = null

    }

    return (
        <div ref={refScope} className='flex text-white max-xl+:hidden'>
            {headerInfo.map((item, idx) => (
                <div onMouseEnter={(e) => handleHover(idx)} key={idx} className='flex cursor-pointer justify-center items-center px-[10px] relative'>
                    <span className='text-sm font-light' >{item.title} </span>
                    <span className='ml-1' onMouseEnter={() => {
                        if (idx == 7) {
                            setInside(prev => !prev);
                            isAnimated.current.index = null
                        }
                    }} >  {idx == 6 ? undefined : <IoIosArrowDown size="0.85em" />} </span>
                    <DropDownMenu idx={idx} item={item} handleLeave={handleLeave} />
                </div>
            ))}
        </div>
    )
}

function DropDownMenu({ idx, item, handleLeave }) {

    return (
        <>
            <DropItem onMouseLeave={(event) => handleLeave(event)} className={`drop-item-${idx} z-10`} $idx={idx} >
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

function Others() {

    const { isMobileOpen, setIsMobileOpen } = useContext(Context)

    const handleClick = () => setIsMobileOpen(prev => !prev)

    return (
        <div className='text-white flex justify-center items-center text-[14px]' >
            <div className='flex justify-center items-start bg-[#252525] max-2xl:hidden mr-6'>
                <div className='text-lg ml-2 flex justify-center items-center h-[32px] ' > <AiOutlineSearch /> </div>
                <input className='mr-6 w px-3 py-2 rounded-sm text-xs bg-[#252525]' placeholder='Kripto, ürünleri arayın' />
            </div>
            <div className='text-xl mr-2 md:mr-6 2xl:hidden' > <AiOutlineSearch /> </div>
            <div className='mr-3 max-md:hidden' >Giriş Yap</div>
            <div className='border px-2 py-1 rounded-xl max-md:mx-3' >Kayıt Ol</div>
            <Seperator />
            <div onClick={() => handleClick()} className='ml-1 text-lg 2xl:hidden'> <AiOutlineMenu /> </div>
            <div className='ml-2 text-2xl max-3xl:hidden flex justify-center items-center icon-wrapper' >
                <BsDownload className='mr-2' />
                <AiOutlineBell className='mr-2' />
                <AiOutlineQuestionCircle className='mr-2' />
                <TbWorld />
            </div>
        </div>
    )

}