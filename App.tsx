import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Host } from 'react-native-portalize'

import { AuthRoutes } from './src/routes/AuthRoutes'
import { UnauthRoutes } from './src/routes/UnauthRoutes'

import { AuthProvider } from './src/contexts/AuthProvider'
import { Routes as NavRoutes } from './src/constants/RootStackParams'

import useAuth from './src/hooks/useAuth'

const Routes = () => {
  const { isLoggedIn } = useAuth()

  return (
    <NavigationContainer
      linking={{
        prefixes: ['quicktest://', 'https://quicktest.test.com', 'https://quicktest.test.com.oauth'],
        config: {
          screens: {
            SignIn: 'signin',
            Home: 'home',
          },
          initialRouteName: isLoggedIn ? NavRoutes.HOME : NavRoutes.SIGNIN,
        }
      }}
    >
      {isLoggedIn ? (
        <Host>
          <AuthRoutes />
        </Host>
      ) : (
        <UnauthRoutes />
      )}
    </NavigationContainer>
  )
}

const App = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  )
}

export default App