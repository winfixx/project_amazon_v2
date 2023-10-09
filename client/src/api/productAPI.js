import { ALL_API_URL, API_URL, FAVOURITES_API_URL, LIMIT_FETCH, PRODUCT_URL, REMOVE_FAVOURITES_API_URL } from "../utils/const"
import { $api, $apiAuth } from "./api"

class ProductAPI {
    async getALlProduct(categoryId = 0, name = '', page = 1, brandId = 0, typeId = 0, limit = LIMIT_FETCH) {
        const { data } = await $api.get(`${API_URL}${PRODUCT_URL}${ALL_API_URL}`, {
            params: {
                categoryId, name, brandId, typeId, limit, page
            }
        })
        return data
    }

    async getByIdProduct(id) {
        const { data } = await $api.get(`${API_URL}${PRODUCT_URL}${ALL_API_URL}/${id}`)
        return data
    }

    async appendFavourites(productId, userId, name, image) {
        try {
            const { data } = await $apiAuth.post(`${API_URL}${PRODUCT_URL}${FAVOURITES_API_URL}`,
                {
                    productId, userId, name, image
                }
            )
            return data
        } catch (e) {
            console.log(e)
        }

    }
    async removeFavourites(productId, userId) {
        try {
            const { data } = await $apiAuth.delete(`${API_URL}${PRODUCT_URL}${REMOVE_FAVOURITES_API_URL}`, {
                params: {
                    productId, userId
                }
            }
            )
            return data
        } catch (e) {
            console.log(e)
        }

    }

    async getFavourites(userId) {
        const { data } = await $apiAuth.get(`${API_URL}${PRODUCT_URL}${FAVOURITES_API_URL}`, {
            params: { userId }
        })
        return data
    }
}

export default new ProductAPI()
