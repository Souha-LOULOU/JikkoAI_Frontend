import React from 'react';
import { useState } from "react";
import { Link } from 'react-router-dom';
import "./login.css"
import {useForm} from 'react-hook-form'
import { login } from './auth'
import {useHistory} from 'react-router-dom'

const API = process.env.REACT_APP_API;

const Login = () => {
   const {register,handleSubmit,reset,formState:{errors}}=useForm()

   const history=useHistory()

   const loginUser=(data)=>{
      console.log(data)


      const requestOptions={
          method:"POST",
          headers:{
              'content-type':'application/json'
          },
          body:JSON.stringify(data)
      }
       
      fetch(`${API}/auth/login`,requestOptions)
      .then(res=>res.json())
      .then(data=>{
          console.log(data.access_token)
          
          if (data){
           login(data.access_token)

           history.push('/profile')
          }
          else{
              alert('Invalid username or password')
          }


      })



      reset()
   }
     
 return(
    <div className="login">

         <form className="login-form" onSubmit={handleSubmit}>
         <div className="form_inner">
            <h2>Login</h2>
         <div className="form-group">
            <input type= "text" name='name' placeholder="Username" {...register('username',{required:true,maxLength:25})}/>
         </div>
         {errors.username && <p style={{color:'red'}}><small>Username is required</small></p>}
         {errors.username?.type === "maxLength" && <p style={{color:'red'}}><small>Username should be 25 characters</small></p>}
         <div className="form-group">
            <input type= "password" name='password' placeholder="password" {...register('password',{required:true,minLength:8})}/>
         </div>
         {errors.username && <p style={{color:'red'}}><small>Password is required</small></p>}
         {errors.password?.type === "maxLength" && <p style={{color:'red'}}></p>}
         <button as="sub" variant="primary" onClick={handleSubmit(loginUser)}>LOGIN</button>
         <small>Do not have an account?<Link to="/form"> Register here</Link></small>
      </div>
    </form>
  </div>
);
};

export default Login;