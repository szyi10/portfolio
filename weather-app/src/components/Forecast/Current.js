import React, { useState, useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import WeatherContext from "../../context/weather-context"

import "./Current.css"

const Current = () => {
  const weatherCtx = useContext(WeatherContext)

  const data = weatherCtx.data.current
  const title = weatherCtx.data.location.name
  const condition = weatherCtx.data.current.condition.text
  const { temp_c, humidity, pressure_mb, vis_km, wind_kph } = data

  return (
    <div className="current">
      <div className="current__header">
        <div>
          <h1 className="current__title">{title}</h1>
          <h2 className="current__weather">{condition}</h2>
        </div>
        <h2 className="current__temp">{temp_c}°C</h2>
      </div>
      <div className="text-divider">Details</div>
      <div className="current__details">
        <div>
          <p>
            <b>Humidity:</b> {humidity}%
          </p>
          <p>
            <b>Pressure:</b> {pressure_mb}Mb
          </p>
        </div>
        <div>
          <p>
            <b>Visibility:</b> {vis_km}km
          </p>
          <p>
            <b>Wind:</b> {wind_kph}km/h
          </p>
        </div>
      </div>
    </div>
  )
}

export default Current
