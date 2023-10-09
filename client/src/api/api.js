import axios from 'axios'
import { BASE_URL } from '../utils/const'
import authAPI from './authAPI'

const $api = axios.create({
    withCredentials: true,
    baseURL: BASE_URL
})

const $apiAuth = axios.create({
    withCredentials: true,
    baseURL: BASE_URL
})

$apiAuth.interceptors.request.use(config => {
    console.log(config)
    config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`
    return config
})

$apiAuth.interceptors.response.use(response => {
    return response
}, async error => {
    const firstRequest = error.config
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
        firstRequest._isRetry = true
        try {
            await authAPI.checkAuth()
            return await $apiAuth.request(firstRequest)
        } catch (error) {
            console.log('Не авторизован');
        }
    }
}
)

export { $api, $apiAuth }
