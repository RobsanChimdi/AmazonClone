import React, { useContext } from 'react'
import classes from "./Header.module.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LowerHeader from './LowerHeader';
import {Link} from "react-router-dom"
import { DataContext } from '../Dataprovider/Dataprovider';


const Header = () => {
const [{basket}, dispatch]=useContext(DataContext)
console.log(basket?.length)
  return (
    <section className={classes.Fixed}>
        <section >
            <div className={classes.header_container}>{/*logo*/}
                <div className={classes.logo_container}>
                <Link to="/">
                    <img src="https://pngimg.com/uploads/amazon/small/amazon_PNG1.png" alt="Amazon Logo" />
                    </Link>
                    {/* {delivery} */}
                    <div className={classes.delivery}>
                       <span>
                        {/* {icon} */}
                       </span>
                        <div>
                            <p>Delivered to</p>
                        <span>Ethiopia</span>
                        </div>
                    </div>
            </div>
            <div className={classes.search}>
                {/* search */}
                <select name="" id="">
                    <option value="">All</option>
                </select>
                <input type="text" name="" id="" placeholder='made' />
                <SearchIcon/>            
            </div>
        
                {/* rightsidelink */}
            <div className={classes.order_container}>
                    <a className={classes.language}>
                        <img src="https://image.shutterstock.com/image-vector/usa-flag-icons-vector-set-260nw-2491312125.jpg" alt="image" />
                        <section>
                            <option value="">EN</option>
                        </section>
                    </a>
                    <Link to="/auth">
                        <div>
                            <p>Sign In</p>
                            <span>Account & Lists</span>
                        </div>
                    </Link>
                    {/* orders */}
                    <Link to="/Orders">
                        <p>returns</p>
                        <span>& Orders</span>
                    </Link>
                    {/* carts */}
                    <Link to="/Cart" className={classes.cart}>
                     <span>{basket.reduce((acc, item) => acc + item.amount, 0)}</span><br />
                    <ShoppingCartIcon/>
                    
                    </Link>
                </div>
         </div> 
        </section>
        <LowerHeader/>
    </section>
  )
}

export default Header