import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  city: "Hydrabad",
  area: "Place 1",
  climateType: "",
};

const mapTopBarSlice = createSlice({
  name: "mapTopBar",
  initialState,
  reducers: {
    updateAll: (state, action) => {
      const { city, area, climateType } = action.payload;
      state.city = city;
      state.area = area;
      state.climateType = climateType;
    },
  },
});

export const { updateAll } = mapTopBarSlice.actions;

export default mapTopBarSlice.reducer;