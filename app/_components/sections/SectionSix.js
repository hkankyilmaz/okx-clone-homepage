import React from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai';


function SectionSix() {
    return (
        <section className='max-md:text-[20px] max-sm:text-[15px] max-xl:px-[50px] text-[32px] mt-[100px] text-white [&>div]:flex [&>div]:mb-10 [&>div]:border-b [&>div]:border-white [&>div]:pb-10 [&>div]:justify-between justify-center items-center w-full'>
            <h1 className='max-md:text-[30px] max-sm:text-[20px]  mb-10 md:mb-20 text-center text-[40px]' >Sorularınız mı Var ?</h1>
            <div> <p>  OKX hangi ürünlerini sunuyor ? </p> <AiOutlinePlusCircle className='text-4xl max-md:text-3xl' /> </div>
            <div> <p>  OKX'te nasıl Bitcoin satın alırım ? </p> <AiOutlinePlusCircle className='text-4xl max-md:text-3xl' /> </div>
            <div> <p>  OKX nerede kuruldu ? </p> <AiOutlinePlusCircle className='text-4xl max-md:text-3xl' /> </div>
            <div> <p>  ABD vatandaşları OKX'i kullanabilir mi? ? </p> <AiOutlinePlusCircle className='text-4xl max-md:text-3xl' /> </div>
        </section>
    )
}

export default SectionSix