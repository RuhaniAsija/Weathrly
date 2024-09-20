import { useContext,createContext, children, useState, useEffect } from "react";

import axios from "axios";

const StateContext = createContext()

export const StateContextProvider = ({children})=>{

    const [weather , setWeather]=useState({})
    const [values , setValues]=useState([])
    const [place , setPlace]=useState('Indore')
    const [thisLocation , setLocation]=useState('')

    //fetch api

    const fetchWeather=async()=>{
    
    const options = {
        method: 'GET',
        url: 'https://visual-crossing-weather.p.rapidapi.com/forecast',
        params: {
            contentType: 'json',
            unitGroup: 'us',
            aggregateHours: '24',
            location: place,
            shortColumnNames: 0
        },
        headers: {
            'x-rapidapi-key': '2fd683eeedmsh932ba7ba6041b45p1a0b22jsn1df1bb2908d3',
            'x-rapidapi-host': 'visual-crossing-weather.p.rapidapi.com'
        }
    };
    
    try {
        const response = await axios.request(options);
        console.log(response.data);
            
        const thisData = Object.values(response.data.locations)[0]
        setLocation(thisData.address)
        setValues(thisData.values)
        setWeather(thisData.values[0])
    } catch (error) {
        console.error(error);
            alert('This Place Does Not Exist')
}
    }
    useEffect(()=>{
        fetchWeather()
    },[place])

    useEffect(()=>{
       console.log(values);
    },[values])

    return ( 
        <StateContext.Provider value={{ 
            weather, setPlace, values, thisLocation,place }}>
      {children}
    </StateContext.Provider>
    );
};

export const useStateContext =()=> useContext(StateContext) 