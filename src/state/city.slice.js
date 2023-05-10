import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  name: "",
  listCity: [],
  locationKey: null, 
};
  
const API_KEY ='EDoXcIUtqNmGbRlLbqNReSUUtgmnUHt0'

//action creator that brings the city api
export const getAutoComplName = (char) => async (dispatch) => {
    try {
      const response = await axios.get(
        `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${char}`
      );
      dispatch(getAutoName(response.data));
        // const locationKey = response.data[0].Key; // get the Key of the first item
        //dispatch(getLocationKey(response.data[0].Key));
        //console.log(getLocationKey);
      
    } catch (error) {
      console.log(error);
    }
  };

  const cityFilterSlice = createSlice({
    name: "city",
    initialState,
    reducers: {
        getCityName: (state, action) => {
          state.name = action.payload;
        },
        
        getAutoName: (state, action) => {
          state.listCity = action.payload;
        },
        
        getLocationKey: (state, action) => {
          state.locationKey = action.payload;
        },
    }});
    
    export const {getCityName, getAutoName, getLocationKey} = cityFilterSlice.actions;
    export const selectCount = (state) => state.city.value;
    
    export default cityFilterSlice.reducer;