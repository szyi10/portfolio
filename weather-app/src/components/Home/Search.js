import React, { useState, useRef, useContext } from "react"
import { useNavigate } from "react-router-dom"

import "./Search.css"
import Button from "../UI/Button"

import WeatherContext from "../../context/weather-context"
import ErrorContext from "../../context/error-context"

const Search = () => {
  const [isValid, setIsValid] = useState(false)

  const searchRef = useRef()

  const weatherCtx = useContext(WeatherContext)
  const errorCtx = useContext(ErrorContext)
  const navigate = useNavigate()

  const handleChange = () => {
    const value = searchRef.current.value
    checkValidity(value)
  }

  const checkValidity = (text) => {
    if (!text || text.trim().length === 0) {
      setIsValid(false)
    }

    setIsValid(true)
  }

  const searchCity = (city) => {
    weatherCtx.searchCity(city)
  }

  const submitHandler = (e) => {
    e.preventDefault()

    if (isValid) {
      searchCity(searchRef.current.value)
      navigate("/forecast")
    } else {
      errorCtx.openError("Please enter a value.")
    }
  }

  return (
    <form className="search" onSubmit={submitHandler}>
      <input
        ref={searchRef}
        className="search__input"
        type="text"
        placeholder="City name"
        onChange={handleChange}
      />
      <div className="search__buttons">
        <Button type="submit" text="Submit" />
        <Button type="reset" text="Reset" />
      </div>
    </form>
  )
}

export default Search
