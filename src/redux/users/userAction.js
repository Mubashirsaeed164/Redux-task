import { FETCH_USER_REQUEST } from "./userType"


export const fetchUserRequest = (userData, query) => {
    // console.log("users", userData)
    // console.log("query is", query)
    return{
        type: FETCH_USER_REQUEST,
        title: query,
        payload: userData
    }
}

