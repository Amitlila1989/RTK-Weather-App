import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    // locationKey: null,
    data: [],
    futureData: [],
    loading: false,
    hasError: false,
};

const API_KEY ='EDoXcIUtqNmGbRlLbqNReSUUtgmnUHt0'
// const locationKey = '215854';

export const getDataAsync = (locationKey) => async (dispatch) => {
    dispatch(getData());
    try {
      const response = await axios.get(
        `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${API_KEY}`
        );
        dispatch(getDataSuccess(response.data));
        // dispatch(getLocationKey(response.locationKey.key));
      } catch (error) {
        dispatch(getDataFailure(error));
      }
    };
  
    export const getFutureDataAsync = (locationKey) => async (dispatch) => {
      dispatch(getData());
      try {
        const response = await axios.get(
          `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY}`
      );
      dispatch(getDataSuccess(response.data));
    } catch (error) {
      dispatch(getDataFailure(error));
    }
};

export const forecastSlice = createSlice({
    name: "forecast",
    initialState,

    reducers: {
      // getLocationKey: (state, action) => {
      //   state.locationKey = action.payload;
      // },

        getData: (state) => {
            state.loading = true;
          },
          getDataSuccess: (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.hasErrors = false;
          },
          getDataFailure: (state) => {
            state.loading = false;
            state.hasErrors = true;
          },
        },
      });
    
      
      export const { getData, getDataSuccess, getDataFailure } = forecastSlice.actions;
      export const selectCount = (state) => state.weather;
      
      export default forecastSlice.reducer;
