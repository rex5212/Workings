import axios from "axios";

const apiArt = axios.create({
    baseURL: 'https://api.artic.edu/api/v1',
})

export default apiArt