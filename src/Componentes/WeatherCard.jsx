import React, { useState , useEffect } from 'react'
import {useDate} from '../Utils/useDate'

import  sun from '../assets/icons/sun.png'
import  cloud  from '../assets/icons/cloud.png'
import  fog  from '../assets/icons/fog.png'
import  rainy from '../assets/icons/rainy.png'
import  snow from '../assets/icons/snow.png'
import  storm from '../assets/icons/storm.png'
import  windy from '../assets/icons/windy.png'

import "../index.css"
export const WeatherCard = (
   {  temperature, windspeed, humidity,place,heatIndex,iconString,conditions}
   ) => {

    const [icon, setIcon]=useState(sun)
  
    const {time} = useDate()

    useEffect(()=>{
      if(iconString){
        if(iconString.toLowercase().includes('cloud')){
          setIcon(cloud);
        }
        else  if(iconString.toLowercase().includes('rain')){
          setIcon(rainy);
        }
         else  if(iconString.toLowercase().includes('thunder')){
          setIcon(storm);
        } else  if(iconString.toLowercase().includes('snow')){
          setIcon(snow);
        } else  if(iconString.toLowercase().includes('fog')){
          setIcon(fog);
        } else  if(iconString.toLowercase().includes('wind')){
          setIcon(windy);
        }else if (iconString.toLowerCase().includes('clear')) {
          setIcon(sun);
        } 
      }
    },[iconString])
    return (
      <div className='w-[22rem] min-w-[22rem] h-[30rem] glassCard p-4'>
        <div className='flex w-full just-center, items-center gap-4 mt-12 mb-4'>
          <img src={icon} alt="weather_icon" />
          <p className='font-bold text-5xl flex justify-center items-center' >{((temperature-32)*5/9).toFixed(1)} &deg;C</p>
        </div>
        <div className='font-bold text-center text-xl'>
          {place}
        </div>
        <div className='w-full flex justify-between items-center mt-4'>
          <p className='flex-1 text-center p-2'>{new Date().toDateString()}</p>
          <p className='flex-1 text-center p-2'>{time}</p>
        </div>
        <div className='w-full flex justify-between items-center mt-4 gap-4'>
          <p className='flex-1 text-center p-2 font-bold bg-blue-600 shadow rounded-lg'>Wind Speed <p className='font-normal'>{windspeed} km/h</p></p>
          <p className='flex-1 text-center p-2 font-bold rounded-lg bg-green-600'>Humidity <p className='font-normal'>{humidity} gm/m&#179;</p></p>
        </div>
        <div className='w-full p-3 mt-4 flex justify-between items-center'>
          <p className='font-semibold text-lg'>Heat Index</p>
          <p className='text-lg'>{heatIndex ? heatIndex : 'N/A'}</p>
        </div>
        <hr className='bg-slate-600' />
        <div className='w-full p-4 flex justify-center items-center text-3xl font-semibold'>
          {conditions}
        </div>
      </div>
    )
}
