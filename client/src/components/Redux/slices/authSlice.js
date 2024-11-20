import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
    isAuthenticated: false,
    passwordResetRequested: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signUp: (state, action) => {
            const { id, email, organizationName, isEnterprise, token } = action.payload;
            state.user = { id, email, organizationName, isEnterprise };
            state.token = token;
            state.isAuthenticated = true;

            // Store in localStorage
            localStorage.setItem("user", JSON.stringify(state.user));
            localStorage.setItem("token", token);
            localStorage.setItem("isAuthenticated", "true");
        },
        logIn: (state, action) => {
            const { id, email, organizationName, isEnterprise, token } = action.payload;
            state.user = { id, email, organizationName, isEnterprise };
            state.token = token;
            state.isAuthenticated = true;

            // Store in localStorage
            localStorage.setItem("user", JSON.stringify(state.user));
            localStorage.setItem("token", token);
            localStorage.setItem("isAuthenticated", "true");
        },
        logOut: (state) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
            state.passwordResetRequested = false;

            // Clear localStorage
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            localStorage.removeItem("isAuthenticated");
        },
        forgetPassword: (state, action) => {
            const { email } = action.payload;
            if (state.user && state.user.email === email) {
                state.passwordResetRequested = true;
                alert("Password reset link sent to your email.");
            } else {
                alert("No account found with the provided email.");
            }
        },
        resetPasswordResetState: (state) => {
            state.passwordResetRequested = false;
        },
    },
});

export const { signUp, logIn, logOut, forgetPassword, resetPasswordResetState } = authSlice.actions;
export default authSlice.reducer;
