import React, { useDebugValue, useEffect, useState } from 'react'
import { productUrl } from '../../API/endPoints'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Layout from '../../Components/Layout/Layout'
import ProductCard from '../../Components/Product/ProductCard'
import Loader from '../../Components/Loader/Loader'

const ProductDetail = () => {
  const [isLoading, setisLoading]=useState(false);
  const {productId}=useParams();
  const [detail, setDetail]=useState([])
useEffect(()=>{
  setisLoading(true)
  axios.get(`${productUrl}/products/${productId}`)
  .then((res)=>{
    setDetail(res.data);
    setisLoading(false);
  }).catch((err)=>{
    console.log(err);
    setisLoading(false);
  })
},[]
)
  return (
    <Layout>
      {isLoading?(<Loader/>):(<ProductCard product={detail} Description={true} flex={true} renderAdd={true}/>)} 
    </Layout>
  )
}

export default ProductDetail