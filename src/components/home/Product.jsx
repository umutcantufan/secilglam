import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`products/${product?.id}`)} className='w-full sm:w-1/2 lg:w-1/3'>
      <div className='border rounded-md overflow-hidden relative cursor-pointer flex flex-col transition-transform duration-300 transform-gpu hover:scale-105 m-3'>
        <div className='w-full h-[300px] flex items-center justify-center'>
          <img className='max-w-full max-h-full object-contain' src={product?.image} alt={product?.title} />
        </div>
        <div className='text-center px-3 text-lg font-bold'>
          <div className='truncate'>{product?.title}</div>
        </div>
        <div className='text-center text-xl font-bold mb-3'>
          <span className='inline-block'>{product?.price}</span> <span className='text-xl'>₺</span>
        </div>
        <div className='mt-auto text-center mb-2 pr-6'>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              navigate(`products/${product?.id}`);
            }}
            className='bg-gray-800 text-white py-2 px-4 rounded hover:bg-black hover:text-white transition-colors duration-300 mb-2'
          >
            Ürünü İncele
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
