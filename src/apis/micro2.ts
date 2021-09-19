import axios from 'axios';

/**
 * @link https://kitsu.docs.apiary.io/
 */
const apiKitsu = axios.create({
    baseURL: 'https://kitsu.io/api2/edge'
})

export default apiKitsu;