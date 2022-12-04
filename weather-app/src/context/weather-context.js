import React, { useState } from "react"

const WeatherContext = React.createContext({
  loading: Boolean,
  data: {},
  setLoading: () => {},
  searchCity: () => {},
  resetData: () => {},
})

export const WeatherContextProvider = (props) => {
  const [isLoading, setIsLoading] = useState(true)
  const [weather, setWeather] = useState({})

  // Search City
  const searchCity = async (city) => {
    const res = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=78816def252b4689b48101523220611&q=${city}&days=3`
    )

    const data = await res.json()
    setWeather(data)
  }

  const setLoading = (bool) => {
    setIsLoading(bool)
  }

  const resetData = () => {
    setWeather({})
  }

  return (
    <WeatherContext.Provider
      value={{
        loading: isLoading,
        data: weather,
        setLoading,
        searchCity,
        resetData,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  )
}

export default WeatherContext
