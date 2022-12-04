import React from "react"

import "./WeatherCard.css"

const WeatherCard = () => {
  return (
    <div className="weather-card">
      <div>
        <h2>Tuesday</h2>
        <h3 className="weather-card__weather">Sunny</h3>
      </div>
      <h2 className="weather-card__temp">12C</h2>
    </div>
  )
}

// sessionstorage for last searched city :)

export default WeatherCard
