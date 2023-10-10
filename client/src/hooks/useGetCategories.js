import { useQuery } from "@tanstack/react-query"
import categoriesAPI from "../api/categoriesAPI"

const useGetCategories = product => {
    useQuery(
        ['get categories'],
        async () => await categoriesAPI.getCategories(),
        {
            onSuccess: data => {
                console.log(data)
                product.setCategories(data)
            },
            onError: e => console.log(e)
        }
    )
    return
}

export default useGetCategories