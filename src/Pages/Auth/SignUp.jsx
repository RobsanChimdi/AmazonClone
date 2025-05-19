import React, {useContext,useState } from 'react'
import classes from "./SignUp.module.css"
import { Link } from 'react-router-dom'
import{ auth} from "../../Utility/firebase"
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth"
import { DataContext } from '../../Components/Dataprovider/Dataprovider'
import { Type } from '../../Utility/actiontype'
const SignUp = () => {
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")
  const [error, setError]=useState("")
const [user, dispatch]=useContext(DataContext)
  const authHandler=(e)=>{
e.preventDefault();
if(e.target.name){
 signInWithEmailAndPassword(auth, email, password).then((userInfo)=>{console.log(userInfo)
dispatch({
  type:Type.SET_USER,
  user:userInfo.user
})}
).catch((err)=>console.log(err))
}
else{
  createUserWithEmailAndPassword(auth, email, password).then((userInfo)=>{console.log(userInfo)}).catch((err)=>{console.log(err)})
}
  }
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
            <input value={email} type='email' id='email' onChange={(e)=>setEmail(e.target.value)}/>
           </div>
           <div>
            <label htmlFor='password'>Password</label>
            <input value={password} type='password' id='paasword' onChange={(e)=>setPassword(e.target.value)}/>
           </div>
           <button type="submit"className={classes.login_signin} name='signin' onClick={authHandler}>Sign In</button>
        </form>
        <p>
          By signing in you agree to the amazon clone terms and conditions. please view our privacy notice
        </p>
        <button className={classes.login_signup} onClick={authHandler} name='signup'>Create an Account</button>
     </div>
   </section>
  )
}

export default SignUp