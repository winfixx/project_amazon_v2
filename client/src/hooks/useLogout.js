import { useMutation } from "@tanstack/react-query"
import authAPI from "../api/authAPI"
import { useContext } from "react"
import { Context } from "../index"
import { useNavigate } from "react-router-dom"

const useLogout = ROUTE => {
    const { user } = useContext(Context)

    const navigate = useNavigate()

    const { mutateAsync } = useMutation(
        async data => await authAPI.logout(),
        {
            onSuccess: data => {
                console.log(data)
                user.setIsAuth(false)
                user.setUser({})
                navigate(ROUTE)
            },
            onError: error => {
                console.log(error)
            }
        }
    )
    return { mutateAsync }
}

export default useLogout