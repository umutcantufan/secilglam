import React, { useState, useEffect } from 'react';
import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../../../redux/cartSlice';
import { searchAction } from '../../../redux/actions/search';
import { useNavigate } from 'react-router-dom';

const NavbarRight = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { itemCount } = useSelector(state => state.carts);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  const handleSearch = () => {
    dispatch(searchAction(keyword));
  };

  return (
    <div className='flex items-center gap-8'>
      <div className='flex items-center border p-2 rounded-md bg-gray-200 w-64'>
        <input
          className='bg-gray-200 outline-none flex-grow'
          type="text"
          placeholder='Ara'
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <BiSearch size={28} onClick={handleSearch} style={{ cursor: 'pointer' }} />
      </div>
      <AiOutlineHeart size={28} />
      <div onClick={() => navigate("cart")} className='relative cursor-pointer'>
        <div className='absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center '>{itemCount}</div>
        <SlBasket size={28} />
      </div>
    </div>
  );
};

export default NavbarRight;
