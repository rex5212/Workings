import axios from "axios";

const apiTMDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: 'Bearer ' + process.env.PUBLIC_API_KEY_TMDB
    }
})

export default apiTMDB