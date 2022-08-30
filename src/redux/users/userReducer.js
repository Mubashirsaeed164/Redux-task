import { FETCH_USER_REQUEST } from "./userType"


const initialState = []||[{
    title:"",
    user: []
}]

const userReducer = (state=initialState, action) => {
    switch(action.type){
        case FETCH_USER_REQUEST:
            return [
                ...state,
                {
                    title:  action.title,
                    user:  action.payload
                }
            
            ]
            default: return state
    }
}

export default userReducer