//Pricing

import { motion } from "framer-motion";
import React from 'react'

function yesPricing(dataValue){
    return(
    <div>
        <div className="home1-text3" style={{ marginBottom: '.8rem' }}><span className="home1-text3" style={{ marginBottom: '.8rem' }} >Do you have the training data ? Your answer was : {dataValue}</span></div>
        <div><span className="home1-text4">*- The amount of provided train data :</span></div>
        <div className="home1-text5" style={{ marginBottom: '.4rem' }}><span className="home1-text5" style={{ marginBottom: '.4rem' }}> 50$/5 years of data</span></div>
        <div><span className="home1-text4">*- Creating the model :</span></div>
        <div className="home1-text5" style={{ marginBottom: '.4rem' }}><span className="home1-text5" style={{ marginBottom: '.4rem' }}>550$</span></div>
        <div><span className="home1-text4">*- Demanding a re-prediction:</span></div>
        <div className="home1-text5" style={{ marginBottom: '.4rem' }}><span className="home1-text5" style={{ marginBottom: '.4rem' }}>120$</span></div>
        <div><span className="home1-text4">*- Having the data treated by specialists (special code) :</span></div>
        <div className="home1-text5" style={{ marginBottom: '.8rem' }}><span className="home1-text5" style={{ marginBottom: '.8rem' }}>840$</span></div>
    </div>
    )
}
function noPricing(dataValue){
    return(
        <div>
            <div className="home1-text3" style={{ marginBottom: '.8rem' }}><span className="home1-text3" style={{ marginBottom: '.8rem' }} >Do you have the training data ? Your answer was : {dataValue}</span></div>
            <div><span className="home1-text4">*- The amount of provided test data can be divided into test/train :</span></div>
            <div className="home1-text5" style={{ marginBottom: '.4rem' }}><span className="home1-text5" style={{ marginBottom: '.4rem' }}> 30$</span></div>
            <div><span className="home1-text4">*- Creating the model :</span></div>
            <div className="home1-text5" style={{ marginBottom: '.4rem' }}><span className="home1-text5" style={{ marginBottom: '.4rem' }}>650$</span></div>
            <div style={{ marginBottom: '.4rem' }} className="home1-text3"><span className="home1-text3" style={{ marginBottom: '.4rem' }}>(check documentation to see why the price here is higher)</span></div>
            <div><span className="home1-text4">*- Having the data treated by specialists, special code :</span></div>
            <div className="home1-text5" style={{ marginBottom: '.8rem' }}><span className="home1-text5" style={{ marginBottom: '.8rem' }}>530$</span></div>
        </div>
        )
}
function textPricing(dataValue){
    if (dataValue === 'Yes'){
        return(yesPricing(dataValue))
    }
    if (dataValue === 'No'){
        return(noPricing(dataValue))
    }
}
const Pricing = ({ page, setPage, formData, setFormData, x, setX }) => {
    return (
    <motion.div                            //updated the div tag
        initial={{ x: x }}
        transition={{ duration: 1 }}
        animate={{ x: 0 }}
      >
      <div className="card">
        <div className="step-title">Pricing</div>
        {textPricing(formData.havingData)}

    <button onClick={() => {setPage(page + 1); setX(1000);}}>
        Next
      </button>
      <br/>
      <button
        onClick={() => {
            setPage(page - 1);
            setX(-1000); //here, we're manipulating the xstate
        }}>
            Previous
      </button>
      </div>
      </motion.div>
      );
  };
  
  export default Pricing