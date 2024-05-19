import React from 'react';
import NavbarLeft from './navbarItem/NavbarLeft';
import NavbarRight from './navbarItem/NavbarRight';

const Navbar = () => {
  return (
    <div className='mb-6'>
      <div className='flex items-center justify-between my-6'>
        <NavbarLeft />
        <NavbarRight />
      </div>
      <hr className='border-t border-gray-300' />
    </div>
  );
};

export default Navbar;
