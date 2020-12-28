import React, { useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getWeather } from "../../redux/actions";

const WeatherEngine = (props) => {
  useEffect(() => {
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=523d6783587546928ac121424202812&q=${props.city}`
      )
      .then((res) => props.dispatch(getWeather(res.data)))
      .catch((err) => console.log(err));
  });
  return <div></div>;
};

const mapStateToProps = (state) => ({
  city: state.inputReducer.data,
});

export default connect(mapStateToProps)(WeatherEngine);
