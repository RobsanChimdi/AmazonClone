import React from 'react';
import Rating from "@mui/material/Rating";
import CurrencyFormat from './CurrencyFormat';
import classes from "./Product.module.css";
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { DataContext } from '../Dataprovider/Dataprovider';
import { Type } from '../../Utility/actiontype';

const ProductCard = ({ product, Description, flex, renderAdd }) => {
  const { image, title, id, rating, price, description } = product;
  const [{basket}, dispatch] = useContext(DataContext);

  const addtocart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        image, title, id, price, description
      }
    });
  };

  return (
    <div className={`${classes.card_container} ${flex ? classes.product_flex : ""}`}>
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} />
      </Link>
      <div>
        <h3 className={classes.title}>{title}</h3>
        <div>{Description && <p>{description}</p>}</div>
         
        <div className={classes.rating}>
          <Rating value={rating?.rate} precision={0.1} />
          <small>{rating?.count}</small>
        </div>
        <div>
          <CurrencyFormat amount={price} />
        </div>
        {renderAdd && <button className={classes.button} onClick={addtocart}>add to cart</button>}
      </div>
      
    </div>
  );
};

export default ProductCard;