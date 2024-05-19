import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCartTotal } from '../redux/cartSlice';
import Cartcomp from '../components/cart/CartComp';

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { carts, totalAmount, itemCount } = useSelector(state => state.carts);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch, carts]);

  return (
    <div>
      {
        carts?.length > 0 ? (
          <div>
            {carts?.map((cart, i) => (
              <Cartcomp key={i} cart={cart} />
            ))}
            <div className="flex items-center justify-end text-2xl">
              Toplam Tutar: <span className="font-bold text-3xl ml-2">{totalAmount} ₺</span>
            </div>
          </div>
        ) : (
          <div>
            Ürün Yok
          </div>
        )
      }
    </div>
  );
};

export default Cart;
