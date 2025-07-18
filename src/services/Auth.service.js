import axios from "axios";
import { Config } from "../helpers/Constants";


function getAuthUser() {
    let currentUser = null;
    if (sessionStorage["authUser"] !== null) {
         currentUser = JSON.parse(sessionStorage.getItem("authUser"));
    }
    return currentUser;

}

function setAuthUser(user) {
    sessionStorage.setItem("authUser", JSON.stringify(user));

}

function removeAuthUser() {
    sessionStorage.removeItem("authUser");
}

function authenticateLoginUser(loginUser){
    return axios.post(`${Config.BASEURL}/AuthApi/authenticate`,JSON.stringify(loginUser),
{
    headers: {
        "content-type" : "application/json"
    }
})
.then(resp=>resp)
.catch(err=>{
    console.log("Error while logging In");
    throw err;
})
}

const AuthService = {
    setAuthUser,
    getAuthUser,
    removeAuthUser,
    authenticateLoginUser
}

export default AuthService;