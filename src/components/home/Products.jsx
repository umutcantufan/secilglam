import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/productSlice'

const Products = () => {
    const dispatch = useDispatch()
    const {products, productsStatus} = useSelector(state => state.products);


console.log(products,"producst");

     useEffect(() => {
        dispatch(getProducts())
     },[dispatch])
  return (
    <div>Products</div>
  )
}

export default Products