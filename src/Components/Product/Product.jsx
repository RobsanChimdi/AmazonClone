import React, { useEffect, useState } from 'react'
import axios from "axios"
import ProductCard from './ProductCard';
import classes from "./Product.module.css"
const Product = () => {
   const [one, setOne]=useState([]);
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((response)=>{
           setOne(response.data)
        }).catch((err)=>{
            console.log(err);
        })
    },[])
  return (
    <div className={classes.product_container}>
        {
        one.map((product)=>(
            <ProductCard product={product} key={product.id} flex={false} renderAdd={true} />
        ))
        }
    </div>
  )
}

export default Product