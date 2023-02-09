//Do you have your data?

import { motion } from "framer-motion";
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';


const HaveDataOrNot = ({ page, setPage, formData, setFormData, x, setX}) => {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(false);
    const [helperText, setHelperText] = React.useState('Select an option according to your entreprise.');

    const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
    };

    const handleSubmit = (event) => {
    event.preventDefault();

    if (value === 'Yes') {
        setHelperText(`Please provide us with the most data
        that you can, so that the model brings out
        more accurate predictions. (The model will be
        given your own data for training & test).
        Your data is 100% safe, we guarantee you 
        that nothing goes into our database.
        Check the documentation to see a proof that
        your data will just be given to the model and not
        to our systems.`);
        setError(false);
    } else if (value === 'No') {
        setHelperText(`Provide us with the test data and we'll
        see if we can give you a good result with it, be
        careful, the accuracy won't be as good as you
        want!`);
        setError(false);
    } else {
        setHelperText('Please select an option.');
        setError(true);
    }
    };
    
    const [clickedState, setClickedState] = React.useState(false);
    const [dataValue, setDataValue] = React.useState('');

    const handleClick = () => {setError(false); setPage(page + 1); setX(1000); console.log(dataValue) ; setFormData({ ...formData, havingData: dataValue })};
    const handleClickOnError = () => {setHelperText('Please select an option.'); setError(true); console.log(clickedState);};
    return (
        
    <motion.div                          
        initial={{ x: x }}
        transition={{ duration: 1 }}
        animate={{ x: 0 }}
      >
      <div className="card">
        <div className="step-title">Do you have your data?</div> 
        <form onSubmit={handleSubmit}>
            <FormControl sx={{ m: 3 }} error={error} variant="standard">
                <FormLabel id="demo-error-radios">Don't worry we can always help you!</FormLabel>
                <RadioGroup
                aria-labelledby="demo-error-radios"
                name="quiz"
                value={value}
                onChange={handleRadioChange}
                >
                <FormControlLabel value="Yes" control={<Radio />} onClick = { () => {setClickedState((clickedState) => true);setDataValue((dataValue)=> 'Yes');console.log(clickedState)}} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} onClick = { () => {setClickedState((clickedState) => true);setDataValue((dataValue)=> 'No');console.log(clickedState)}} label="No" />
                </RadioGroup>
                <FormHelperText>{helperText}</FormHelperText>
                <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
                Further Details
                </Button>
            </FormControl>
        </form>
          
        <button onClick={clickedState ? handleClick : handleClickOnError}>
          Next
        </button>
      </div>
      </motion.div>);
  };
  
  export default HaveDataOrNot;