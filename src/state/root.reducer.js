import { combineReducers } from "@reduxjs/toolkit";
import cityReducer from "./city.slice";
import forecastReducer from "./forecast.slice";

const rootReducer = combineReducers({
city: cityReducer,
forecast: forecastReducer,
});

export default rootReducer;