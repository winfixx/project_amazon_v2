import { useMutation } from "@tanstack/react-query"
import productAPI from "../api/productAPI"

const useFavourites = (productStore) => {
    const { mutateAsync: appendFavourites } = useMutation(
        async ({ productId, userId, name, image }) => await productAPI.appendFavourites(productId, userId, name, image),
        {
            onSuccess: data => {
                productStore.setFavourites(
                    [
                        data,
                        ...productStore.favourites
                    ]
                )
            },
            onError: error => console.log(error)
        }
    )

    const { mutateAsync: removeFavourites } = useMutation(
        async ({ productId, userId }) => await productAPI.removeFavourites(productId, userId),
        {
            onSuccess: data => {
                productStore.setFavourites(
                    productStore.favourites.filter(e => e.productId !== data.productId)
                )
            },
            onError: error => console.log(error)
        }
    )

    return { appendFavourites, removeFavourites }
}

export default useFavourites