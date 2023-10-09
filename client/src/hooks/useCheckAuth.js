import { useQuery } from "@tanstack/react-query"
import authAPI from "../api/authAPI"

const useCheckAuth = user => {
    try {
        useQuery(['get user'], async () => await authAPI.checkAuth(),
            {
                onSuccess: data => {
                    console.log(data)
                    user.setIsAuth(true)
                    user.setUser(data.user)
                },
                onError: error => console.log(error)
            }
        )
    } catch (e) {
        console.log(e)
    }
}

export default useCheckAuth