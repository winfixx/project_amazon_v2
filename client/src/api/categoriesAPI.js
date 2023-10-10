import { API_URL, CATEGORY_URL } from "../utils/const"
import { $api } from "./api"

class CategoriesAPI {
    async getCategories() {
        const { data } = await $api.get(`${API_URL}${CATEGORY_URL}`)
        return data
    }
}

export default new CategoriesAPI()