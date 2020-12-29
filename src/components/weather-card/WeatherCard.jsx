import React, { useState } from 'react'
import { connect } from 'react-redux'
import './WeatherCard.css'

const WeatherCard = (props) => {
  let data
  props.details.map((weatherData) => (data = weatherData.weatherData))

  return (
    <>
      {data ? (
        <div className={`${data.current.temp_c > 23 ? 'hot' : 'cold'} card`}>
          <div className='card-header'>
            <h2>{data.location.name.toUpperCase()}</h2>
            <p>
              {data.location.region.toUpperCase()} -{' '}
              {data.location.country.substring(0, 2).toUpperCase()}
            </p>
          </div>
          <div className='card-body'>
            <img src={data.current.condition.icon} alt='weather-icon' />
            <p>{data.current.condition.text}</p>
            <p>{!data.current.condition.is_day ? 'Day' : 'Night'}</p>
            <p>Temp - {data.current.temp_c}&#x2103;</p>
          </div>
        </div>
      ) : null}
    </>
  )
}
const mapStateToProps = (state) => ({
  details: state.weatherReducer.weatherData,
})
export default connect(mapStateToProps)(WeatherCard)
