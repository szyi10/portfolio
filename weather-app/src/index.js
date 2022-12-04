import React from "react"
import ReactDOM from "react-dom/client"

import App from "./App"
import { ErrorContextProvider } from "./context/error-context"
import { WeatherContextProvider } from "./context/weather-context"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <ErrorContextProvider>
      <WeatherContextProvider>
        <App />
      </WeatherContextProvider>
    </ErrorContextProvider>
  </React.StrictMode>
)
