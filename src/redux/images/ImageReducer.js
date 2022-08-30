import { FETCH_IMAGE_REQUEST } from "./imageType"


const initialState =[]
//  [{
//     images: [],
//     title: ''
// }]

const ImageReducer = (state = initialState, action) => {

    // console.log(action.payload);

    switch(action.type){
        case FETCH_IMAGE_REQUEST:
            return [
                ...state,
                {
                    images: action.payload, 
                    title: action.title
                }
            ]      
            default: return state
    }

}

export default ImageReducer