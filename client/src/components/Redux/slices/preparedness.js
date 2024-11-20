


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  crisis: {},
  economics: {},
  physical: {},
  strategies: {},
  environment: {},
  social: {},
};

const preparednessSlice = createSlice({
  name: "preparedness",
  initialState,
  reducers: {
    // Main reducer to handle all updates at once
    updateAllPreparedness: (state, action) => {
      return {
        ...state,
        ...action.payload
      };
    },
    // Keep individual reducers for specific updates if needed
    updateCrisis: (state, action) => {
      state.crisis = { ...state.crisis, ...action.payload };
    },
    updateEconomics: (state, action) => {
      state.economics = { ...state.economics, ...action.payload };
    },
    updatePhysical: (state, action) => {
      state.physical = { ...state.physical, ...action.payload };
    },
    updateStrategies: (state, action) => {
      state.strategies = { ...state.strategies, ...action.payload };
    },
    updateEnvironment: (state, action) => {
      state.environment = { ...state.environment, ...action.payload };
    },
    updateSocial: (state, action) => {
      state.social = { ...state.social, ...action.payload };
    },
  },
});

export const {
  updateAllPreparedness,
  updateCrisis,
  updateEconomics,
  updatePhysical,
  updateStrategies,
  updateEnvironment,
  updateSocial,
} = preparednessSlice.actions;

export const selectPreparedness = (state) => state.preparedness;

export default preparednessSlice.reducer;