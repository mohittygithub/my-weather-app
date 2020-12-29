import React from 'react'
import InputBox from '../input-box/InputBox'
import WeatherEngine from '../weather-engine/WeatherEngine'
import WeatherCard from '../weather-card/WeatherCard'
import './WeatherPage.css'
import Footer from '../footer/Footer'

const WeatherPage = () => {
  return (
    <div className='weather-page'>
      <InputBox />
      <WeatherEngine />
      <WeatherCard />
      <Footer />
    </div>
  )
}
export default WeatherPage
