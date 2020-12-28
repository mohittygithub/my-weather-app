import actionType from "./actions";

const initialState = {
  weatherData: [],
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_WEATHER_DATA:
      return {
        ...state,
        weatherData: [{ weatherData: action.payload }],
      };
    default:
      return state;
  }
};

export default weatherReducer;
