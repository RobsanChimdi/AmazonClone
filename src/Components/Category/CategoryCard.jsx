import React from 'react'
import categoryImage from "./category"
import Category from "./Category1"
import classes from "./Category.module.css"

const CategoryCard = () => {
  return (
    <div className={classes.category_container}>
        {
   categoryImage.map((info, index)=>{
    
    return <Category data={info} key={index}/>
   })
        }
    </div>
  )
}

export default CategoryCard