import axios from "axios";

const Instance = axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID o2dtp54Wcz-CyilYtblOYEhegiTHoc9HZg4-FAHQits'
    }
})

const userApi = (query, page_count) => {
    return Instance.get(`search/users?query=${query}&page=${page_count}`)
    .then((res) => {
        // console.log(res)
        return res.data.results
    })
    .catch((error) => {
        return error.response;
    })
}

const fetchUsers = (username) => {
    return Instance.get(`users/${username}`)
    .then((res)=>{
        // console.log(res)
        return res.data
    })
    .catch((error) => {
        return error.response
    })
}

const imageApi = (query) => {
    return Instance.get(`search/photos?query=${query}`)
    .then((res) => {
        // console.log(res)
        return res.data.results
    })
    .catch((error) => {
        return error.response;
    })
}

export {Instance , userApi, fetchUsers, imageApi}



