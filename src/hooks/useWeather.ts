import { useContext } from 'react'
import  {WeatherContext}  from '../context/weatherContext'

export function useWeather() {
    const value = useContext(WeatherContext)
    
    return value
}