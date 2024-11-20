
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  passwordResetRequested: false, // New state to track if password reset was requested
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUp: (state, action) => {
      state.user = action.payload;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      localStorage.setItem("user", JSON.stringify(state.user));
      localStorage.setItem("token", state.token);
      localStorage.setItem("isAuthenticated", true);
    },
    logIn: (state, action) => {
      // **Update state with user data from successful login**
      state.user = {
        id: action.payload.id,
        email: action.payload.email,
        organizationName: action.payload.organizationName,
        isEnterprise: action.payload.isEnterprise
      };
      state.token = action.payload.token;
      state.isAuthenticated = true;

      // **Update localStorage**
      localStorage.setItem("user", JSON.stringify(state.user));
      localStorage.setItem("token", state.token);
      localStorage.setItem("isAuthenticated", "true");
    },
    logOut: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.passwordResetRequested = false; // Clear reset state
      localStorage.removeItem("user");
      localStorage.removeItem("isAuthenticated");
    },
    forgetPassword: (state, action) => {
      const { email, phone } = action.payload;
      // Check if user exists with provided email or phone
      if (
        state.user &&
        (state.user.email === email || state.user.phone === phone)
      ) {
        state.passwordResetRequested = true;
        alert(
          "Password reset link sent to your " + (email ? "email" : "phone")
        );
      } else {
        alert(
          "No account found with the provided " + (email ? "email" : "phone")
        );
      }
    },
    resetPasswordResetState: (state) => {
      state.passwordResetRequested = false; // Reset the flag after the reset process
    },
  },
});

export const {
  signUp,
  logIn,
  logOut,
  forgetPassword,
  resetPasswordResetState,
} = authSlice.actions;
export default authSlice.reducer;
