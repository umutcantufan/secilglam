import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, getCartTotal } from '../../redux/cartSlice';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const DetailComp = ({ productDetail }) => {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(0);

  const decrement = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  const increment = () => {
    if (quantity < productDetail?.rating?.count) setQuantity(quantity + 1);
  };

  const addBasket = () => {
    dispatch(addToCart({
      id: productDetail?.id,
      title: productDetail?.title,
      image: productDetail?.image,
      price: productDetail?.price,
      quantity: quantity
    }));
    dispatch(getCartTotal()); 
  };

  const renderStars = (rating) => {
    if (typeof rating !== 'number' || rating < 0 || rating > 5) {
      return null;
    }

    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    return (
      <>
        {Array(fullStars).fill(null).map((_, index) => (
          <FaStar key={`full-${index}`} className="text-yellow-500" />
        ))}
        {halfStar === 1 && <FaStarHalfAlt className="text-yellow-500" />}
        {Array(emptyStars).fill(null).map((_, index) => (
          <FaRegStar key={`empty-${index}`} className="text-yellow-500" />
        ))}
      </>
    );
  };

  return (
    <div className="flex gap-10 my-10">
      <div className="w-1/2 flex items-center justify-start p-4 rounded-lg border border-gray-200" style={{ width: '500px', height: '500px' }}>
        <img
          className="w-full h-full object-contain"
          src={productDetail?.image}
          alt={productDetail?.title}
        />
      </div>
      <div className="w-1/2">
        <div className="text-3xl font-semibold">{productDetail?.title}</div>
        <div className="text-2xl font-bold my-2">
          {productDetail?.price} <span className="text-2xl">₺</span>
        </div>
        <div className="my-2 text-xl text-black flex items-center font-semibold">
          Değerlendirme: {renderStars(productDetail?.rating?.rate)}
        </div>
        <div className="my-2 text-xl text-black font-semibold">
          Stok: {productDetail?.rating?.count}
        </div>
        <div className="flex items-center gap-5 my-4">
          <div className="flex items-center gap-3 border p-2 rounded-md">
            <div onClick={decrement} className="text-2xl cursor-pointer">
              -
            </div>
            <input
              className="w-6 text-center text-2xl font-semibold"
              type="text"
              value={quantity}
              readOnly
            />
            <div onClick={increment} className="text-2xl cursor-pointer">
              +
            </div>
          </div>
          <div
            onClick={addBasket}
            className="border text-xl bg-gray-200 cursor-pointer hover:bg-gray-400 w-[150px] h-12 flex items-center justify-center rounded-md font-semibold"
          >
            Sepete Ekle
          </div>
        </div>
        <div className="my-4">
          <div className="text-2xl font-semibold">Ürün Açıklaması</div>
          <div className="text-lg">{productDetail?.description}</div>
        </div>
      </div>
    </div>
  );
};

export default DetailComp;
