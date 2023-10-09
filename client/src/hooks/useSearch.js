import { useMutation } from "@tanstack/react-query"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { Context } from "../index"
import useDebounce from "./useDebounce"
import { useNavigate } from "react-router-dom"
import { SHOP_ROUTE } from "../utils/const"

const useSearch = () => {
    const { product } = useContext(Context)
    const navigate = useNavigate()
    const { handleSubmit, register, reset } = useForm({ mode: 'onChange' })

    // const { mutateAsync, isLoading, isError, error } = useMutation(async data => { },
    //     {
    //         onSuccess: data => {
    //             console.log(data)
    //             product.setIsLoading(false)
    //         },
    //         onError: error => console.log(error)
    //     }
    // )

    // const debouncedCallback = useDebounce(mutateAsync, 1000)

    const searchProduct = async data => {
        try {
            console.log(data)
            product.setSelectedCategory({ id: data.categoryId })
            product.setNameProduct(data.name)
            navigate(SHOP_ROUTE)
            reset()
            // if (!product.isLoading) product.setIsLoading(true)
            // await mutateAsync(data)
        } catch (error) {
            console.log(error)
        }
    }

    // const searchProductOnChange = async data => {
    //     try {
    //         if (!product.isLoading) product.setIsLoading(true)

    //         await debouncedCallback(data.target.value)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    return { searchProduct, register, handleSubmit }
}

export default useSearch