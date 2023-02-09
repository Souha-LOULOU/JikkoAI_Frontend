import React from 'react';
import { useState } from "react";
import "./formEdit.css"
import { useAuth ,logout} from './auth'
import Login from './Login'
import FormInputEdit from './FormInputEdit';
import {useForm} from 'react-hook-form'
import {useHistory} from 'react-router-dom'
const API = process.env.REACT_APP_API;

const LoggedInEdit= () => {
  let token=localStorage.getItem('REACT_TOKEN_AUTH_KEY')
  const {reset,formState:{errors}}=useForm()

  const history=useHistory()
      const [values, setValues] = useState({
        companyname: "",
        commercialname: "",
        creationdate: "",
        producttype: "",
        country: "",
        physicaladdress: "",
        username: "",
        email: "",
        password: "",
      });
    
      const inputs = [
        {id: 1,
          name: "companyname",
          type: "text",
          placeholder: "Company's name",
          label: "Company's name",
          required: true,
        },
        {id: 2,
            name: "commercialname",
            type: "text",
            placeholder: "Commercial name",
            label: "Commercial name",
            required: true,
           },
        {
          id: 3,
            name: "creationdate",
            type: "date",
            placeholder: "Creation date",
            label: "Creation date",
          },
          {id: 4,
            name: "producttype",
            type: "text",
            placeholder: "Product type",
            label: "Product type",
            required: true,
           },
           {id: 5,
            name: "country",
            type: "text",
            placeholder: "Country",
            label: "Country",
            required: true,
           },
           {id: 6,
            name: "physicaladdress",
            type: "text",
            placeholder: "Physical address",
            label: "Physical address",
            required: true,
           },
        {
          id: 7,
          name: "username",
          type: "text",
          placeholder: "Username",
          errorMessage:
            "Username should be 3-16 characters and shouldn't include any special character!",
          label: "Username",
          pattern: "^[A-Za-z0-9]{3,16}$",
          required: true,
        },
        {
          id: 8,
          name: "email",
          type: "email",
          placeholder: "Email",
          errorMessage: "It should be a valid email address!",
          label: "Email",
          required: true,
        },
        {
          id: 9,
          name: "password",
          type: "password",
          placeholder: "Password",
          errorMessage:
            "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
          label: "Password",
          pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
          required: true,
        },
      ];
    
      const handleSubmit = async(e) => {
        e.preventDefault();
        const res = await fetch(`${API}/update`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            'Authorization':`Bearer ${JSON.parse(token)}`
          },
          body: JSON.stringify({
            ...values
          }),
        });
        await res.json();
        reset()
        history.push('/profile')
      };
    
      const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
    
      return (
        <>
        <div className="form">
          <form className="editprofile-form" onSubmit={handleSubmit}>
            <h1>Edit Profile</h1>
            {inputs.map((input) => (
              <FormInputEdit
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
            <button>Submit</button>
          </form>
        </div>
        </>
      );

}

const LoggedOutEdit = () => {
  return (
      <>
  <div>You must be connected to enter this page </div>
  <Login></Login>
  

      </>
  )
}
const FormEdit = () => {
  const [logged] = useAuth();
  return (
    <div>
            {logged ? <LoggedInEdit /> : <LoggedOutEdit />}
        </div>
  )
    };

export default FormEdit;