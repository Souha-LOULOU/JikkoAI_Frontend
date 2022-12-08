import React from 'react';
import { useState } from "react";
import "./login.css"
const Login = () => {
   const adminUser = {
      username : "souha",
      password : "souha123"
   }
   const [user, setUser] = useState({
      username: "",
      password: "",
   });
   const [details, setDetails] = useState({
      username: "",
      password: "",
   });

   const [error, setError] = useState("");

   const singnin = details => {
      console.log(details);
      if(details.username == adminUser.username && details.password == adminUser.password){
         console.log("logged in");
         setUser({
            username: details.username,
            password: details.password
         })
      }else {
         console.log("details do not match");
         setError("details do not match");}
      }

   const logout = () => {
      console.log("logout");
      setUser({
         username:"",
         password:""
      });
      }

      const handleSubmit = (e) => {
         e.preventDefault();
         singnin(details);
       };
     
 return(
    <div className="login">
      {(user.username!= "" && user.password!="") ?(
         <div className="welcome">
            <h2> Welcome <span> {user.username}</span></h2>
            <button onClick={logout}>Logout</button>
         </div>
      ):(
         <form className="login-form" onSubmit={handleSubmit}>
         <div className="form_inner">
            <h2>Login</h2>
            {(error !="")? (<div className='error'>{error}</div>) :""}
         <div className="form-group">
            <input type= "text" name='name' placeholder="Username" onChange={e=>setDetails({...details, username: e.target.value})} value = {details.username}/>
         </div>
         <div className="form-group">
            <input type= "password" name='password' placeholder="Password" onChange={e=>setDetails({...details, password: e.target.value})} value = {details.password}/>
         </div>
         <input type='submit' value='LOGIN' />
      </div>
    </form>
      )}
  </div>
);
};

export default Login;