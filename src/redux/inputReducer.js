import actionType from "./actions";

const initialState = {
  data: "",
};

const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_USER_INPUT:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
export default inputReducer;
