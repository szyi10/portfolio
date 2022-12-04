import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

import Current from "../components/Forecast/Current"
import WeatherCard from "../components/Forecast/WeatherCard"
import Button from "../components/UI/Button"
import WeatherContext from "../context/weather-context"
import ErrorContext from "../context/error-context"

import "./Forecast.css"

const Forecast = () => {
  const weatherCtx = useContext(WeatherContext)
  const errorCtx = useContext(ErrorContext)
  const navigate = useNavigate()

  useEffect(() => {
    // Check if searched City is loaded (object exists)
    if (Object.keys(weatherCtx.data).length != 0) {
      weatherCtx.setLoading(false)
    }
    // Check if City exists
    if (Object.keys(weatherCtx.data).includes("error")) {
      weatherCtx.setLoading(true)
      errorCtx.openError(
        "No city found. You'll be taken to the home page in 5 seconds."
      )
      setTimeout(() => {
        weatherCtx.resetData()
        navigate("/")
      }, 5000)
    }
  }, [weatherCtx.data])

  if (weatherCtx.loading) {
    return (
      <>
        <p className="forecast__loading--text">Loading...</p>
        <Link className="forecast__loading--btn" to="/">
          <Button type="button" />
        </Link>
      </>
    )
  }

  return (
    <div className="forecast">
      <Current />
      <div className="forecast--cards">
        <WeatherCard />
        <WeatherCard />
      </div>
      <Link className="forecast__btn" to="/">
        <Button type="button" />
      </Link>
    </div>
  )
}

export default Forecast
