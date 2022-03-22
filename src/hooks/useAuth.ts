import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider'

function useAuth() {
    const {
        isLoggedIn,
        setIsLoggedIn,
        isLoading,
        setIsLoading,
        userToken,
        setUserToken,
        signIn
    } = useContext(AuthContext)

    return {
        isLoggedIn,
        setIsLoggedIn,
        isLoading,
        setIsLoading,
        userToken,
        setUserToken,
        signIn
    }
}

export default useAuth