import './App.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Inputs } from './Inputs'
import { useState } from 'react';
import axios from 'axios'
import  Result  from './Result';

function App() {




    const [input, setinput] = useState('');
    const [desc, setdesc] = useState('');
    const [temp, settemp] = useState('');
    const [icon, seticon] = useState('');


    const findweather = async() => {
        const apikey = "5633075634b3c03860fa56c90cef13ab";
        const unit = "metric";

        const url = "https://api.openweathermap.org/data/2.5/weather?q=" + input + "&appid=" + apikey + "&units=" + unit;
        const response = await axios.get(url);
        const temp = await response.data.main.temp;
        const weatherDesc = await response.data.weather[0].description;
        const icon = await response.data.weather[0].icon;
        const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        settemp(temp);
        setdesc(weatherDesc);
        seticon(imageURL);
    };
    console.log(temp, desc, icon);
  
    return (
        <div>
        {temp === "" ? (
         <Inputs input = { input }setinput = { setinput } findweather = { findweather }   />
         ):
        (
            <div>
           
       <Result temp={temp} desc={desc} image={icon}/>
      </div>
        )}
        </div>
    );
}

export default App;