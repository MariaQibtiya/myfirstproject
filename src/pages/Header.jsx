import React from 'react';
import Logo from '../assests/Lahore-Grammar-School-1024x1024.png';
const Header = () => {
  return (
    // for logo
    <div className='bg-blue'>
    <div className=' flex mt-8 h-20 w-20  justify-center items-center mx-auto my-auto'>
     <img src={Logo} alt="Logo" />
     
     {/* //for searchbar */}
     
        </div>
    </div>
  )
}

export default Header;
