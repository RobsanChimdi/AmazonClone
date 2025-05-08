import React from 'react'
import Layout from '../../Components/Layout/Layout'
import  Carousel  from '../../Components/Carousel/CarouselEffect'
import Category from "../../Components/Category/CategoryCard"
import Product from "../../Components/Product/Product"

const Landing = () => {
  return (
    <div>
        <Layout>
            <Carousel/>
            <Category/>
            <Product/>
        </Layout>
    </div>
  )
}

export default Landing