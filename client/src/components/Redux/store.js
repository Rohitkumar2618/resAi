// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import mapTopBarReducer from "./slices/mapTopBarSlice";
import preparednessReducer from "./slices/preparedness";
const store = configureStore({
  reducer: {
    auth: authReducer,
    mapTopBar: mapTopBarReducer,
    preparedness: preparednessReducer,
  },
});

export default store;
