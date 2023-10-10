import { useMutation } from '@tanstack/react-query'
import { useContext } from 'react'
import { Context } from '../index'
import { useNavigate } from 'react-router-dom'
import authAPI from '../api/authAPI'

const useAuth = (isLoginPath, ROUTE) => {
    const { user } = useContext(Context)

    const navigate = useNavigate()

    const { mutateAsync, isLoading, isError, error } = useMutation(
        async data => isLoginPath ? await authAPI.login(data) : await authAPI.registration(data),
        {
            onSuccess: (data) => {
                console.log(data)
                user.setIsAuth(true)
                user.setUser(data.user)
                navigate(ROUTE)
            },
            onError: error => console.log(error.message)
        }
    )

    const onSubmit = async data => {
        try {
            console.log(data)
            await mutateAsync(data)
        } catch (error) {
            console.log(error.response.data)
        }
    }

    return { isLoading, isError, error, onSubmit }
}

export default useAuth
