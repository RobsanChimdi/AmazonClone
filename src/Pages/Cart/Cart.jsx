import React, { useContext } from 'react';
import Layout from '../../Components/Layout/Layout';
import { DataContext } from '../../Components/Dataprovider/Dataprovider';
import ProductCard from "../../Components/Product/ProductCard";
import CurrencyFormat from '../../Components/Product/CurrencyFormat';
import { Link } from 'react-router-dom';
import classes from "./Cart.module.css";
import { Type } from '../../Utility/actiontype';

const Cart = () => {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const total = basket.reduce((amount, item) => amount + item.price * item.amount, 0);
  const totalItems = basket.reduce((acc, item) => acc + item.amount, 0);
const increment=(item)=>{
  dispatch({
    type:Type.ADD_TO_BASKET
  })
}
const decrement=(id)=>{
  dispatch({
    type:Type.REMOVE_FROM_BASKET,
    id
  })
}
  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.cart_Container}>
          <h2>Hello</h2>
          <h3>Your Shopping Basket</h3>
          <hr />
          {
            basket?.length === 0 ? (
              <p>Oops | no items found</p>
            ) : (
              basket?.map((items, i) => (
             <div className={classes.make}>  <ProductCard key={i} product={items} Description={true} flex={true} renderAdd={false} />
                <div>
                 <button onClick={()=>increment(items)}>+</button>
                 <button onClick={()=>decrement(items.id)}>-</button>
              </div>
            </div> 
              ))
            )
          }
        </div>
        {basket?.length !== 0 && (
          <div className={classes.subtotal}>
            <div>
              <p>SubTotal ({totalItems} items)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>
            <Link to="/Payment">Continue to checkout</Link>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Cart;
