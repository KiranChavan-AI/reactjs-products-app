import { Children, createContext, useState } from "react";
import AuthService from "../services/Auth.service";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "../store/store";
import authReducer from "../reducer/auth.reducer";
import { AuthActions } from "../actions/auth.actions";

export const UserContext = createContext(null);

function UserProvider({ children }) {
  //const [currentUser, setCurrentUser] = useState(AuthService.getAuthUser);
  const [currentDate, setcurrentDate] =useState("");
  const currentUser = useSelector(state=> state.authReducer.currentUser);
    const navigate = useNavigate();
    const loginClick = (user) => {
        //setCurrentUser(user);
        //AuthService.setAuthUser(user);
        store.dispatch(AuthActions.Login(user));

    }

    const logoutClick = () => {

        // AuthService.removeAuthUser();
        // setCurrentUser(null);
        store.dispatch(AuthActions.Logout());
        navigate
            ('/login');
    }
  
    return (
        <UserContext.Provider value={{currentUser,currentDate,setcurrentDate,loginClick,logoutClick }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;