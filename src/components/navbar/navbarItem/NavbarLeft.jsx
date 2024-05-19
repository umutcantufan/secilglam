import React from 'react';
import { Link } from 'react-router-dom';

const NavbarLeft = () => {
  return (
    <div className="flex items-center space-x-10">
      <Link to="/" className="text-4xl">
        <span className="font-extrabold">Secil</span>
        <span className="font-normal">Glam</span>
      </Link>
      <nav className="text-lg space-x-6">
        <Link to="/" className="hover:border-b-2 hover:border-black pb-1">Anasayfa</Link>
        <Link to="#" className="hover:border-b-2 hover:border-black pb-1">Yeni Gelenler</Link>
        <Link to="#" className="hover:border-b-2 hover:border-black pb-1">Markalar</Link>
        <Link to="#" className="hover:border-b-2 hover:border-black pb-1">İndirim</Link>
        <Link to="#" className="hover:border-b-2 hover:border-black pb-1">Size Özel</Link>
      </nav>
    </div>
  );
};

export default NavbarLeft;
