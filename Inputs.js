import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export const Inputs = ({input,setinput,findweather}) => {
    const functioncall =(e)=> {
        e.preventDefault();
        findweather();
    }
  return <div className="Inputbox" id='home'>
  <div className='Inputbox-field'> 
  <h1>Google Weather App</h1>
  <h6>Powered by</h6>
  <img src='Google.jpg' />
<form>
<TextField id="standard-basic" label="Enter city the name" variant="standard" onChange={(e)=> setinput(e.target.value)} value={input}/>
<Button variant="contained" color="success" onClick={functioncall}>
    Search
  </Button>
</form>
</div>
</div>
};
