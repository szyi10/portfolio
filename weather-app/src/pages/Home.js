import React from "react"

import "./Home.css"

import Title from "../components/Home/Title"
import Search from "../components/Home/Search"

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <Title />
        <Search />
      </div>
    </div>
  )
}

export default Home
