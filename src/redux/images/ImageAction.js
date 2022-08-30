import { FETCH_IMAGE_REQUEST } from "./imageType"


export const fetchImageRequest = (imageData, query) => {
    // console.log("image", imageData)
    // console.log("query", query)
    return {
        type: FETCH_IMAGE_REQUEST,
        title: query,
        payload: imageData
    }
}

