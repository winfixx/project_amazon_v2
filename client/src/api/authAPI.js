import { ACCESS_TOKEN, API_URL, LOGIN_ROUTE, LOGOUT_URL, REFRESH_URL, REGISTRATION_ROUTE, USER_API_URL } from '../utils/const'
import { $api, $apiAuth } from './api'

class AuthAPI {
    async registration(dataUser) {
        try {
            const { data } = await $api.post(`${API_URL}${USER_API_URL}${REGISTRATION_ROUTE}`, dataUser)
            localStorage.setItem(ACCESS_TOKEN, data.accessToken)
            return data
        } catch (e) {
            console.log(e)
        }
    }

    async login(dataUser) {
        try {
            const { data } = await $api.post(`${API_URL}${USER_API_URL}${LOGIN_ROUTE}`, dataUser)
            localStorage.setItem(ACCESS_TOKEN, data.accessToken)
            return data
        } catch (e) {
            console.log(e)
        }
    }

    async checkAuth() {
        try {
            const { data } = await $api.get(`${API_URL}${USER_API_URL}${REFRESH_URL}`)
            localStorage.setItem(ACCESS_TOKEN, data.accessToken)
            return data
        } catch (e) {
            console.log(e)
        }
    }

    async logout() {
        try {
            const { data } = await $api.post(`${API_URL}${USER_API_URL}${LOGOUT_URL}`)
            localStorage.removeItem(ACCESS_TOKEN)
            return data
        } catch (e) {
            console.log(e)
        }
    }
}

export default new AuthAPI()