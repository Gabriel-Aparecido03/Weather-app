import React,{createContext,useState,ReactNode} from 'react'
import axios from 'axios'

type City = {
    code:number,
    message?:string,
    name?:string,
    description?:string,
    temp?:number,
    humidity?:number,
    country?:string,
    speed?:string,
    tempMax?:number,
    icon?:string
}

type WeatherContextType = {
    city:City | undefined,
    gettingCityInformations:(newState: string)=> void
}

type WeatherContextProps = {
    children: ReactNode
}

export const WeatherContext = createContext<WeatherContextType>({} as WeatherContextType)

export function WeatherContextProvider({children}:WeatherContextProps) {
    const [city,setCity] = useState<City>()

    function gettingCityInformations(city:string) {
        if(typeof city === 'undefined') {
            return false
        }
        fixedNameCity(city)
    }   

    function fixedNameCity(city:string) {
        var arrCity = city.split(" ")
        if(arrCity.length > 1) {
            for(var element in arrCity) {
                var word = arrCity[element]
                var newWord = word.charAt(0).toUpperCase() + word.slice(1);
                arrCity[element] = newWord
            }
            var cityFixedString = arrCity.join("+")
            pullCityWeather(cityFixedString)

        }
        else {
            var wordOne = arrCity[0]
            var newWordOne = wordOne.charAt(0).toUpperCase() + wordOne.slice(1);
            var cityFixedStringOne = newWordOne
            pullCityWeather(cityFixedStringOne)
        }
    }

    async function pullCityWeather(city:string) {
        console.log(city)
        await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d8707fe8ccdd36d63cd82f6cc89d4bc4&units=metric&lang=pt_br`)
            .then((result)=>{
                const { cod } = result.data
                if(cod === 200 ) {
                    const { temp,humidity } = result.data.main
                    const { name } = result.data
                    const { country } = result.data.sys
                    const { description } = result.data.weather[0]
                    const { speed } = result.data.wind
                    const {temp_max} = result.data.main
                    const { icon } = result.data.weather[0]

                    setCity({
                        code:cod,
                        name:name,
                        temp:temp,
                        humidity:humidity,
                        country:country,
                        description:description,
                        speed:speed,
                        tempMax:temp_max,
                        icon:icon
                    })
                }
                else {
                    console.log(cod)
                }
            })
    }

    return (
        < WeatherContext.Provider value={{city,gettingCityInformations}}>{children}</ WeatherContext.Provider >
    )
}