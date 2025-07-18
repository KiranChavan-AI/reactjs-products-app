import { createAction } from "@reduxjs/toolkit";

export const AuthActions = {
    Login: createAction('auth/Login'),
    Logout: createAction('auth/Logout')
}