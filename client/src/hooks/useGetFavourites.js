import { useQuery } from "@tanstack/react-query"
import productAPI from "../api/productAPI"

const useGetFavourites = (product, userId) => {
    const { data, isLoading } = useQuery(['get favourites', userId],
        async () => await productAPI.getFavourites(userId),
        {
            onSuccess: data => product.setFavourites(
                [
                    ...data,
                    ...product.favourites
                ].reverse()
            ),
            onError: error => console.log(error)
        }
    )

    return { data, isLoading }
}

export default useGetFavourites