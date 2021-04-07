import axios from 'axios';

const apiKitsu = axios.create({
    baseURL: 'https://kitsu.io/api/edge'
})

export default apiKitsu;