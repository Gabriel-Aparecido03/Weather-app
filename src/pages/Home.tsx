import React,{useState,useEffect} from 'react'
import { useWeather } from '../hooks/useWeather'

import { BiSearch } from 'react-icons/bi'

import { GiWindsock,GiWaterDrop,GiThermometerScale,GiRaining } from 'react-icons/gi'

import Cloudy from '../assets/images/cloudy.png'

export function Home() {
    const {city,gettingCityInformations} = useWeather()

    const [cityInformations,setCityInformations] = useState()
    const [cityString,setCityString] = useState<string>("")

    useEffect( ()=>{
        gettingCityInformations('london')
    },[])

    const handleCity = (e:any)=>{
        setCityString(e.target.value)
    }

    const handleSearchCity = async (e:any)=> {
        await gettingCityInformations(cityString)
    }

    return (
        <div id="Home" className='block bg-dark-gray h-screen'>
            <header className='block text-center h-10 pt-5 px-4'>
                <div className='flex justify-center '>
                    <BiSearch onClick={handleSearchCity} className='flex justify-center text-center mt-auto mb-auto text-xl mr-2'/>
                    <input onChange={handleCity} className='rounded-xl border-none text-sm w-full p-3' placeholder='coloque o nome da cidade aqui' type="text" />
                </div>
            </header>
            <main className='text-center justify-center flex-col mt-28 '>
                <p className='text-sm '><strong className='font-bold'>{city?.name}</strong>,{city?.country}</p>
                <div className='block text-center items-center justify-center mt-1'>
                    <div className="flex text-center items-center justify-center">
                        <img className='w-1/6' src={`http://openweathermap.org/img/wn/${city?.icon}@2x.png`} alt="dia parcialmente nublado"/>
                    </div>
                    <h1 className='font-bold text-5xl'>{city?.temp}°C</h1>
                    <h3 className='font-medium text-dark-gray'>{city?.description}</h3>
                </div>
                <div className='grid grid-cols-2 gap-4 mt-5 mx-1'>
                    <div className=' bg-white rounded-xl  h-20 flex justify-around text-center gap-3'>
                       <div >
                           <p className='grid items-center h-full text-xl' ><GiWindsock/></p>
                       </div>
                       <div className='flex flex-col h-full justify-center'>
                            <h1 className='text-medium font-bold '>Ventos</h1>
                            <p className='text-xs font-semibold'>{city?.speed}Km/h</p>
                       </div>
                    </div>
                    <div className='bg-white rounded-xl h-20 flex justify-around text-center gap-3' >
                        <div>
                            <p className='grid items-center h-full text-xl'><GiWaterDrop/></p>
                        </div>
                        <div className='flex flex-col h-full justify-center'>
                            <h1 className='text-medium font-bold'>Humidade</h1>
                            <p className='text-xs font-semibold'>{city?.humidity}%</p>
                        </div>
                    </div>
                    <div className='bg-white rounded-xl h-20 flex justify-around text-center gap-3'>
                        <div>
                            <p className='grid items-center h-full text-xl'><GiThermometerScale/></p>
                        </div>
                        <div className='flex flex-col h-full justify-center'>
                            <h1 className='text-medium font-bold'>Temperatura</h1>
                            <p className='text-xs font-semibold'>{city?.temp}°C</p>
                        </div>
                    </div>
                    <div className='bg-white rounded-xl h-20 flex justify-around text-center gap-3'>
                        <div>
                            <p className='grid items-center h-full text-xl'><GiThermometerScale/></p>
                        </div>
                        <div className='flex flex-col h-full justify-center'>
                            <h1 className='text-medium font-bold'>Temp Máxima</h1>
                            <p className='text-xs font-semibold'>{city?.tempMax}°C</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}