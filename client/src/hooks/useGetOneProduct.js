import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import productAPI from "../api/productAPI"

const useGetOneProduct = id => {
    const [image, setImage] = useState({
        currentImage: '',
        allImage: []
    })

    const { data, isLoading, isError } = useQuery(
        ['get product', id],
        async () => await productAPI.getByIdProduct(id),
        {
            onSuccess: data => {
                setImage({currentImage: data.image, allImage: data.images})
            },
            onError: error => console.log(error),
            enabled: !!id
        }
    )

    return { data, isLoading, isError, image, setImage }
}

export default useGetOneProduct