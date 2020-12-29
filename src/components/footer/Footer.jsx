import React from 'react'
import { connect } from 'react-redux'

const Footer = (props) => {
  let data
  props.details.map((detail) => (data = detail.weatherData))
  let location = data ? data.location : null
  let current = data ? data.current : null
  return <div>{data ? <p>{location.name.toUpperCase()}</p> : null}</div>
}
const mapStateToProps = (state) => ({
  details: state.weatherReducer.weatherData,
})
export default connect(mapStateToProps)(Footer)
