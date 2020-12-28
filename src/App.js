import "./App.css";
import InputBox from "./components/input-box/InputBox";
import WeatherCard from "./components/weather-card/WeatherCard";
import WeatherEngine from "./components/weather-engine/WeatherEngine";

function App() {
  return (
    <div>
      <InputBox />
      <WeatherEngine />
      <WeatherCard />
    </div>
  );
}

export default App;
