import React from "react";
import InputBox from "../input-box/InputBox";
import WeatherEngine from "../weather-engine/WeatherEngine";
import WeatherCard from "../weather-card/WeatherCard";

const WeatherPage = () => {
  return (
    <div>
      <InputBox />
      <WeatherEngine />
      <WeatherCard />
    </div>
  );
};
export default WeatherPage;
