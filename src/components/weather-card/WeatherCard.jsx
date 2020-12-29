import React from "react";
import { connect } from "react-redux";
import "./WeatherCard.css";

const WeatherCard = (props) => {
  return (
    <>
      {props.details.map((detail) => (
        <div
          className={`{detail.weatherData.current.temp_c} > 25
           ? cold : hot} card`}
          key={detail.weatherData.location.name}
        >
          <img
            className="card-img-top"
            src={detail.weatherData.current.condition.icon}
            alt="current weather icon"
          />
          <div className="card-body">
            <h5 className="card-heading">
              {detail.weatherData.location.name} -
              {detail.weatherData.location.region}
            </h5>
            <p>{detail.weatherData.location.country}</p>
            <p className="card-text">
              Temp : {detail.weatherData.current.temp_c}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};
const mapStateToProps = (state) => ({
  details: state.weatherReducer.weatherData,
});
export default connect(mapStateToProps)(WeatherCard);
