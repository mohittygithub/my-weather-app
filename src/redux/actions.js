const actionType = {
  GET_WEATHER_DATA: "GET_WEATHER_DATA",
  GET_USER_INPUT: "GET_USER_INPUT",
};

export const getWeather = (weatherData) => ({
  type: actionType.GET_WEATHER_DATA,
  payload: weatherData,
});
export const getUserInput = (input) => ({
  type: actionType.GET_USER_INPUT,
  payload: input,
});

export default actionType;
