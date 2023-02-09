//Upload data

import { motion } from "framer-motion";

import Button from '@material-ui/core/Button';

import React, {useState, useEffect} from 'react';


function YesUpload(dataValue){
    //for train file
    const [fileTrain, setFileTrain] = useState()

    function handleChangeTrain(event) {
      setFileTrain(event.target.files[0])
    }

    const [isShown, setIsShown] = useState(false);
    function handleSubmit(event) {
        //setIsShown(true);
        setIsShown(current => !current);
    }

    function getFileNameTrain(fileName){
        return(
            <p style={{fontSize: "14px"}}>Your file is : {fileName}</p>
        )
    }
    function noFileTrain(){
            return(
                <p style={{color : "red" , fontSize: "14px"}}>please upload a train data file before verifying</p>
            )
    }

    //for test file
    const [fileTest, setFileTest] = useState()

    function handleChangeTest(event) {
      setFileTest(event.target.files[0])
    }

    function getFileNameTest(fileName){
        return(
            <p style={{fontSize: "14px"}}>Your file is : {fileName}</p>
        )
    }
    function noFileTest(){
            return(
                <p style={{color : "red" , fontSize: "14px"}}>please upload a test data file before verifying</p>
            )
    }
    function verifyTestTrainFileName(TestFileName,TrainFileName){
        if(TestFileName === TrainFileName){
            return(
                <p style={{color : "red", fontSize: "14px"}}> Warning ! The training file is the same as the test file</p>
            )
        }
    }
    function verifTrain(file){
        if (typeof(file) === 'undefined'){
           //console.log("first if Train  " + typeof(file))
           return noFileTrain()}
        else{
           //console.log("second if Train  " + typeof(file))
           return getFileNameTrain(file.name)
        }
    }
    function verifTest(file){
        if (typeof(file) === 'undefined'){ 
            //console.log("first if Test  " + typeof(file))
            return noFileTest()
        }
        else{
            //console.log("second if Test  " + typeof(file))
            return getFileNameTest(file.name)
        }
    }
    function verifTestTrain(fileTest, fileTrain){
        /*if (!(typeof(fileTest) === 'undefined')){
            if (!(typeof(fileTest) === 'undefined')){
                console.log("verifTestTrain : "+typeof(fileTest)+"  "+typeof(fileTrain))
                return verifyTestTrainFileName(fileTest.name, fileTrain.name);
            }
        }*/
        if (typeof(fileTest) === 'undefined'){
            return null
        }
        if (typeof(fileTrain) === 'undefined'){
            return null
        }
        //console.log("verifTestTrain : "+typeof(fileTest)+"  "+typeof(fileTrain))
        //setHandleDisable(false);
        //console.log(this.state.handleDisable)
        return verifyTestTrainFileName(fileTest.name, fileTrain.name);
    }
    
    return(
    <div>
        <div className="home1-text3" style={{ marginBottom: '.8rem' }}><span className="home1-text3" style={{ marginBottom: '.8rem' }} >Do you have the training data ? Your answer was : {dataValue}</span></div>
        <div style={{ marginBottom: '.4rem' }}><span className="home1-text4">*- The training data should be organized in this way :</span></div>
        <div className="home1-text5" style={{ marginBottom: '.8rem' }}><span className="home1-text5" style={{ marginBottom: '.4rem' }}> date, store, item, sales</span></div>
        <div style={{ marginBottom: '.4rem' }}><span className="home1-text4">*- The test data should be organized in this way :</span></div>
        <div className="home1-text5" style={{ marginBottom: '.8rem' }}><span className="home1-text5" style={{ marginBottom: '.4rem' }}> id, date, store, item</span></div>
        <div style={{ marginBottom: '.4rem' }} className="home1-text3"><span className="home1-text3" style={{ marginBottom: '.4rem' }}>(The files should be either in .csv format or an excel file)</span></div>

        <input
            type="file"
            accept=".csv,.xlsx"
            style={{ display: 'none' }}
            id="contained-button-file"
            onChange={handleChangeTrain}
        />
        <label htmlFor="contained-button-file">
            <Button variant="contained" color="primary" component="span" style={{ marginTop: '.8rem', marginBottom: '20px' }} >
                Upload train data
            </Button>
        </label>
        <input
            type="file"
            accept=".csv,.xlsx"
            style={{ display: 'none' }}
            id="contained-button-file2"
            onChange={handleChangeTest}
        />
        <label htmlFor="contained-button-file2">
            <Button variant="contained" color="primary" component="span" style={{ marginTop: '.8rem', marginBottom: '20px' , marginLeft: '60px'}}>
                Upload test data
            </Button>
        </label>
        <button onClick={handleSubmit} style={{marginLeft : "85px" , marginBottom:".8rem"}}>{isShown ? "Hide" : "Verify"} uploaded file names</button>
        {/*isShown && (typeof(fileTrain) === 'undefined' ? noFileTrain() : getFileNameTrain(fileTrain.name))*/}
        {isShown && verifTrain(fileTrain)}
        {/*isShown && (typeof(fileTest) === 'undefined' ? noFileTest() : getFileNameTest(fileTest.name))*/}
        {isShown && verifTest(fileTest)}
        {/*(typeof(fileTest) === 'undefined' && typeof(fileTest) === 'undefined') ? undefined : verifyTestTrainFileName(fileTest.name, fileTrain.name)*/}
        {verifTestTrain(fileTrain, fileTest)}
    </div>
    )
}


function NoUpload(dataValue){
    //for test file
    const [fileTest, setFileTest] = useState()

    function handleChangeTest(event) {
      setFileTest(event.target.files[0])
    }
    
    function getFileNameTest(fileName){
        return(
            <p style={{fontSize: "14px"}}>Your file is : {fileName}</p>
        )
    }

    const [isShown, setIsShown] = useState(false);
    function handleSubmit(event) {
        //setIsShown(true);
        setIsShown(current => !current);
    }

    function noFileTest(){
        return(
            <p style={{color : "red" , fontSize: "14px"}}>please upload a test data file before verifying</p>
        )
    }

    function verifTest(file){
        if (typeof(file) === 'undefined'){ 
            //console.log("first if Test  " + typeof(file))
            return noFileTest()
        }
        else{
            //console.log("second if Test  " + typeof(file))
            return getFileNameTest(file.name)
        }
    }
    
    return(
        <div>
            <div className="home1-text3" style={{ marginBottom: '.8rem' }}><span className="home1-text3" style={{ marginBottom: '.8rem' }} >Do you have the training data ? Your answer was : {dataValue}</span></div>
            <div style={{ marginBottom: '.4rem' }}><span className="home1-text4">*- The test data should be organized in this way :</span></div>
            <div className="home1-text5" style={{ marginBottom: '.8rem' }}><span className="home1-text5" style={{ marginBottom: '.4rem' }}> id, date, store, item</span></div>
            <div style={{ marginBottom: '.4rem' }} className="home1-text3"><span className="home1-text3" style={{ marginBottom: '.4rem' }}>(The files should be either in .csv format or an excel file)</span></div>
    
            <input
                type="file"
                accept=".csv,.xlsx"
                style={{ display: 'none' }}
                id="contained-button-file"
                onChange={handleChangeTest}
            />
            <label htmlFor="contained-button-file" style={{marginLeft:"120px"}}>
                <Button variant="contained" color="primary" component="span" style={{ marginTop: '.8rem', marginBottom: '20px' }} >
                    Upload test data
                </Button>
            </label>
            <button onClick={handleSubmit} style={{marginLeft : "95px" , marginBottom:".8rem"}}>{isShown ? "Hide" : "Verify"} uploaded file names</button>
            {isShown && verifTest(fileTest)}
        </div>
        )
}


function textUpload(dataValue){
    if (dataValue === 'Yes'){
        return(YesUpload(dataValue))
    }
    if (dataValue === 'No'){
        return(NoUpload(dataValue))
    }
}



const UploadingData = ({ page, setPage, formData, setFormData, x, setX }) => {
    /*function onNextClick(event){
        if (!(typeof(fileTrain) === 'undefined') && !(typeof(fileTest) === 'undefined')){
            console.log('mriguel')
            if (!(fileTest.name === fileTrain.name)){  
                console.log('aya t3ada')
                setPage(page + 1); 
                setX(1000);
                setgoToNextPage(true);
            }
        }
    }*/
    //const otherPart = ((fileTest.name === fileTrain.name) ? setgoToNextPage(false) :setPage(page + 1), setX(1000), setgoToNextPage(true))
    //const handleClick = () => {((typeof(fileTrain) === 'undefined') && (typeof(fileTest) === 'undefined')) ? setgoToNextPage(false) : otherPart};
    /*function goOrNotToNextPage(){
        if (!(goToNextPage)){
            return(
                <p style={{color : "red", fontSize: "12px"}}>Error. Please update the correct files to be able to go to the next step.</p>
            )
        }
    }*/

    // Similaire à componentDidMount et componentDidUpdate :
    //useEffect(() => {
    //});
    return (
    <motion.div                            //updated the div tag
        initial={{ x: x }}
        transition={{ duration: 1 }}
        animate={{ x: 0 }}
      >
      <div className="card">
        <div className="step-title">Uploading your data</div>
        {textUpload(formData.havingData)}
    <button onClick={() => {setPage(page + 1); setX(1000); }}>
      {/*<button onClick={handleClick}>*/}
        Next
      </button>
      <br />
      <button
        onClick={() => {
            setPage(page - 1);
            setX(-1000); //here, we're manipulating the xstate
        }}>
            Previous
        </button>
       {/*goOrNotToNextPage()*/}
      </div>
      </motion.div>
    );
  };
    
  export default UploadingData;