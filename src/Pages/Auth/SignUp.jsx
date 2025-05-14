import React from 'react'
import classes from "./SignUp.module.css"
import Layout from '../../Components/Layout/Layout'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
   <section className={classes.login}>
     <Link>
        <img src='/src/Components/Carousel/img/download.jpg'/>
     </Link>
     <div className={classes.login_container}>
        <h1>Sign In</h1>
     
        <form>
           <div>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email'/>
           </div>
           <div>
            <label htmlFor='password'>Password</label>
            <input type='password' id='paasword'/>
           </div>
           <button className={classes.login_signin}>Sign In</button>
        </form>
        <p>
          By signing in you agree to the amazon clone terms and conditions. please view our privacy notice
        </p>
        <button className={classes.login_signup}>Create an Account</button>
     </div>
   </section>
  )
}

export default SignUp