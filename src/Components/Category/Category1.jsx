import React from 'react'
import classes from "./Category.module.css"
import {Link} from "react-router-dom"
const Category1 = ({data}) => {
  return (
    <div className={classes.category}>
        <Link to ={`/category/${data?.name}`}>
            <span>
                <h1>{data?.title}</h1>
            </span>
            <img src={data?.imageLink} alt="" />
            <p>Shop Now</p>
        </Link>
    </div>
  )
}

export default Category1