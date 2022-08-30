import { configureStore } from "@reduxjs/toolkit";
import ImageReducer from "./images/ImageReducer";
import userReducer from "./users/userReducer";
// import rootReducer from "./rootReducer";

const store =  configureStore({
    reducer:{
        galleryImages: ImageReducer,
        users: userReducer
    }
})
export default store