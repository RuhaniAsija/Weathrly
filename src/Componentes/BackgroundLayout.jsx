import React, { useEffect , useState } from 'react'
import { useStateContext } from "../Context";

import clear from "../assets/images/clear.png"
import stormy from "../assets/images/stormy.png"
import cloudy  from "../assets/images/cloudy.png"
import snow from "../assets/images/snow.png"
import fog from "../assets/images/fog.png"
import rainy from "../assets/images/rainy.png"
import sunny from "../assets/images/sunny.png"




export const BackgroundLayout = () => {

  const {weather} = useStateContext()
  console.log(weather);

  const [image,setImage]=useState(clear)

  useEffect(()=>{
    if(weather.conditions){
      let imageString = weather.conditions

      if(imageString.toLowerCase().includes('clear')){
        setImage(clear)
      }else if(imageString.toLowerCase().includes('storm')||imageString.toLowerCase().includes('thunder')){
        setImage(stormy)
      }else if(imageString.toLowerCase().includes('cloud')){
        setImage(cloudy)
      }else if(imageString.toLowerCase().includes('rain') || imageString.toLowerCase().includes('shower')){
        setImage(rainy)
      }else if(imageString.toLowerCase().includes('snow')){
        setImage(snow)
      }else if(imageString.toLowerCase().includes('overcast')){
        setImage(cloudy)
      }else if(imageString.toLowerCase().includes('fog')){
        setImage(fog)
      }else if(imageString.toLowerCase().includes('sunny')){
        setImage(sunny)
      }
    }
  },[weather])

  return (
   <img src={image} alt='weather-img' className='h-screen w-full fixed left-0 top-0 -z-10'/>
  )
}
