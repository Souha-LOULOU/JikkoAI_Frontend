//Please wait (page)

import { motion } from "framer-motion";
import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
const API = process.env.REACT_APP_API;

const Processing = ({ page, setPage, formData, setFormData, x, setX }) => {
  const [loading, setLoading] = useState(false);

  /*useEffect(() => {
    setLoading(true);
    setTimeout(() => {
    setLoading(false);
      }, 2000);
  }, []);*/


    return (
    <motion.div                            //updated the div tag
        initial={{ x: x }}
        transition={{ duration: 1 }}
        animate={{ x: 0 }}
      >
        
      <div className="card">
        <div className="step-title">Processing your data...</div>
        <div className="home1-text3" style={{ marginBottom: '.8rem' }}><span className="home1-text2" style={{ marginBottom: '.8rem' }} >It's the final step before beginning the prediction !</span></div>
        <div className="container">
        <div className="loader-container">
      	  <div className="spinner" style={{marginLeft: "160px", marginTop: "36px"}}></div>
        </div>
      </div>
        <br />
      <br />
      <div className="home1-text3" style={{marginTop: "120px" }}><span>Please wait until the process of the verification finishes</span></div>
      <button
        onClick={() => {
            setPage(page - 1);
            setX(-1000); //here, we're manipulating the xstate
        }} style={{marginTop: "8px"}}>
            Previous
      </button>
      <Button
        style={{marginTop: "8px", color:"white", backgroundColor:"blueviolet"}}  href= "http://localhost:5000/predict">
            Predict
      </Button>
      </div>
      </motion.div>
    );
  };
  
  export default Processing;