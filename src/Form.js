import React from 'react';
import { useState } from "react";
import { useForm } from 'react-hook-form'
import "./form.css"
import FormInput from './FormInput';
import { Link } from 'react-router-dom';
import {Alert } from 'react-bootstrap'

const API = process.env.REACT_APP_API;

const Form = () => {

    const {reset } = useForm();
    const [show,setShow]=useState(false)

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
        confirmPassword: "",
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
        {
          id: 10,
          name: "confirmPassword",
          type: "password",
          placeholder: "Confirm Password",
          errorMessage: "Passwords don't match!",
          label: "Confirm Password",
          pattern: values.password,
          required: true,
        },
      ];
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch(`${API}/clients`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...values
          }),
        });
        setShow(true)
        await res.json();
        setValues({
          companyname: "",
          commercialname: "",
          creationdate: "",
          producttype: "",
          country: "",
          physicaladdress: "",
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      };
    
      const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
    
      return (
        <div className="form">
        <div className='alert'>
           {show?
               <>
                <p>Click on the "x" symbol to close the alert message.</p>
                <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
                <strong>Sucess!</strong> your account was successfully created
                <h1></h1>
                </>
                :
                <h1></h1>
               }
          </div>
          <form className="register-form" onSubmit={handleSubmit}>
            <h1>Register</h1>
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
            <button >Submit</button>
            <small>Already have an account?<Link to="/login"> Log In  </Link></small>
          </form>
        </div>
      );
    };

export default Form;