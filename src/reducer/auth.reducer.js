import { createReducer } from "@reduxjs/toolkit";
import AuthService from "../services/Auth.service";
import { AuthActions } from "../actions/auth.actions";

const intialState = {
    currentUser: AuthService.getAuthUser()
}

const authReducer = createReducer(intialState, (builder) => {
    builder.addCase(AuthActions.Login, (state, action) => {
        state.currentUser = action.payload;
        AuthService.setAuthUser(action.payload);
    })
    .addCase(AuthActions.Logout,(state,action)=>{
        AuthService.removeAuthUser();
        state.currentUser= null;        
    })

})

export default authReducer;