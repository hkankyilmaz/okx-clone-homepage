"use client"

import React from 'react';
import Navbar from './Navbar';
import MobileNavBar from './MobileNavBar';
import { ContextProvider } from '@/app/_context/context';


function Header() {
    return (
        <div className='px-4 bg-[#121212] flex sm:px-6'>
            <ContextProvider>
                <Navbar />
                <MobileNavBar />
            </ContextProvider>
        </div>

    )
}

export default Header