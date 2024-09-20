import { useState } from 'react'
import './App.css'
import { useStateContext } from './Context'
import search from './assets/icons/search.png'
import {BackgroundLayout} from './Componentes/BackgroundLayout'
import { WeatherCard } from './Componentes/WeatherCard'
import { MiniCard } from './Componentes/MiniCard'

function App() {
  const [input, setInput] = useState('')

  const {weather,thisLocation ,values,place,setPlace} = useStateContext();
  // console.log(weather);

  const submitCity=()=>{
      setPlace(input);
      setInput('')
  }
  return (
    <div className='text-white px-8 w-full h-screen'>
      
      <nav className='w-full p-3 flex justify-between items-center'>

        <h1 className='font-bold tracking-wide text-3xl'> Weathrly</h1>
        <div className='bg-white w-[15rem] overflow-hidden shadow-2xl p-2 gap-2 rounded flex items-center'>
          <img src={search} alt="search" className='w-[1.5rem] h-[1.5rem]' />

          <input type="text" className='focus:outline-none w-full text-[#212121] text-lg'
          value={input} onChange={e=>setInput(e.target.value)} placeholder='Search City'
          onKeyUp={(e)=>{
            if(e.key==='Enter'){
                   //submit form
                submitCity()
            }
          }}/>
        </div>
      </nav>

      <BackgroundLayout/>
      <main className='w-full flex flex-wrap gap-8 py-4 px-[10%] justify-center items-center'>
       
       <WeatherCard 
       place={thisLocation}
       windspeed={weather.wspd}
       humidity={weather.humidity}
       temperature={weather.temp}
       heatIndex={weather.heatIndex}
       conditions={weather.conditions}  />

        <div className="flex justify-center gap-8 flex-wrap w-[60%]">
          {
            values?.slice(1,7).map((curr)=>{
             return (<MiniCard 
              key ={curr.datetime}
              time={curr.datetime}
              temp={curr.temp}
              iconString={curr.conditions}
              /> )
            })
          }
        </div>
      </main>
    </div>
  )
}

export default App
