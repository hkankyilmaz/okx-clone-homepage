import React from 'react';
import Navbar from './Navbar';
import RightNavBar from './RightNavBar';
import MobileNavBar from './MobileNavBar';


function Header() {
    return (
        <div className='px-4 bg-[#121212] flex sm:px-6'>
            <Navbar />
            <RightNavBar />
            <MobileNavBar />
        </div>

    )
}

export default Header