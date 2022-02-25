import React from 'react'
import Button from '@mui/material/Button';
import  './Result1.css'
 function Result  ({temp,desc,image,setinput}){
     const handle = (e) =>{
         setinput("");
     }
  return (
    <div className='result'>
    <div className='result-box'>
        <h1>Temp:{temp}°C</h1>
        <p>Description:{desc}</p>
        <img src={image} alt="icon"/>
        <br/>
       <a href='home'> <button  onClick={handle}>Change</button></a>
    </div>
    </div>
  )
}
export default Result;
