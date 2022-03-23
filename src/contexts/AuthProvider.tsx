import React, { createContext, useState } from 'react'
import { authorize } from 'react-native-app-auth'
import { 
    DROPBOX_AUTH_URL,
    DROPBOX_CLIENT_ID, 
    DROPBOX_CLIENT_SECRET 
} from '@env'
import useSnackbar from '../hooks/useSnackbar'
interface AuthContextData {
    isLoggedIn: boolean
    setIsLoggedIn: (logged: boolean) => void
    isLoading: boolean
    setIsLoading: (loading: boolean) => void
    userToken: string
    setUserToken: (token: string) => void
    signIn(): Promise<void>
}

export const AuthContext = createContext({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [userToken, setUserToken] = useState<string>('')

    const { success, error } = useSnackbar()

    async function signIn() {
        setIsLoading(true)
        const config = {
            clientId: DROPBOX_CLIENT_ID,
            clientSecret: DROPBOX_CLIENT_SECRET,
            redirectUrl: 'https://quicktest.test.com',
            scopes: [],
            serviceConfiguration: {
              authorizationEndpoint: `${DROPBOX_AUTH_URL}/oauth2/authorize`,
              tokenEndpoint: `${DROPBOX_AUTH_URL}/oauth2/token`,
            },
            useNonce: false,
            usePKCE: false,
        }

        await authorize(config).then(((res: any) => {
            setUserToken(`Bearer ${res.accessToken}`)
            setIsLoggedIn(true)
            success('Welcome')
        })).catch((err: Error) => {
            console.log(err)
            error('Something went wrong :(')
        }).finally(() => {
            setIsLoading(false)
        })
    }

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                setIsLoggedIn,
                isLoading,
                setIsLoading,
                userToken,
                setUserToken,
                signIn
            }}
        >
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider