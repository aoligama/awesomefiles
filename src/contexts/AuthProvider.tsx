import React, { createContext, useState } from 'react'
import { authorize } from 'react-native-app-auth'

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

    async function signIn() {
        setIsLoading(true)
        const config = {
            clientId: '7zwnzpa07eau419',
            clientSecret: 'fh0hcgl0551kjh8',
            redirectUrl: 'https://quicktest.test.com',
            scopes: [],
            serviceConfiguration: {
              authorizationEndpoint: 'https://www.dropbox.com/oauth2/authorize',
              tokenEndpoint: `https://www.dropbox.com/oauth2/token`,
            },
            useNonce: false,
            usePKCE: false,
        }

        await authorize(config).then((res => {
            setUserToken(res.accessToken)
            setIsLoggedIn(true)
        })).catch(err => {
            console.log(err)
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