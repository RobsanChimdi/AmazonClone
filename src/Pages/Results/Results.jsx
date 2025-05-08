import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { productUrl } from '../../API/endPoints';
import Layout from '../../Components/Layout/Layout';
import ProductCard from '../../Components/Product/ProductCard';
import classes from "./Results.module.css"
const Results = () => {
  const [results, setResults]=useState([]);
  const {categoryName}=useParams();
  useEffect(()=>{
    axios.get(`${productUrl}/products/category/${categoryName}`).then((res)=>{
      setResults(res.data)
      console.log({res});
    }).catch((err)=>{
      console.log(err)
    })
  },[categoryName])
  return (
   <Layout>
    <section>
      <h1 style={{padding:"30px"}}>Results</h1>
      <p style={{padding:"30px"}}>Category/{categoryName}</p>
      <hr />
      <div className={classes.products_container}>
        {
        results.map((product)=>(
            <ProductCard product={product} key={product.id} flex={false} renderAdd={true}/>
        ))
        }
      </div>
    </section>
   </Layout>
  )
}

export default Results