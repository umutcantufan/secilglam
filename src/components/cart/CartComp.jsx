import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, getCartTotal } from '../../redux/cartSlice';

const Cartcomp = ({ cart }) => {
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
    dispatch(getCartTotal());
  };

  return (
    <div className="my-4 p-4 border rounded-md flex items-center justify-between">
      <img className="w-[125px] h-[125px] object-cover" src={cart?.image} alt="" />
      <div className="w-[476px] mx-4">
        <div className="text-xl font-semibold">{cart?.title}</div>
        <div className="text-sm">{cart?.description}</div>
      </div>
      <div className="font-bold text-xl">
        {cart?.price} TL ({cart?.quantity})
      </div>
      <div
        onClick={() => handleRemove(cart?.id)}
        className="bg-red-500 text-white w-[100px] h-16 flex items-center justify-center cursor-pointer rounded-md"
      >
        Ürünü Sil
      </div>
    </div>
  );
};

export default Cartcomp;
