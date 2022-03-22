import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList, Routes } from '../constants/RootStackParams'
import { Home } from '../screens/Home'
import { SignIn } from '../screens/SignIn'
import useAuth from '../hooks/useAuth'
import { COLORS } from '../theme'

const Stack = createNativeStackNavigator()
const { isLoggedIn } = useAuth()

const AppStack = () => (
    <Stack.Navigator 
        initialRouteName={isLoggedIn ? Routes.HOME : Routes.SIGNIN} 
        screenOptions={{
            headerShown: true
        }}
    >
        <Stack.Screen
            name={Routes.SIGNIN}
            component={SignIn}
            options={{ 
                title: 'Awesome Files',
                headerStyle: {
                    backgroundColor: COLORS.PRIMARY,
                },
                headerTintColor: COLORS.LIGHT,
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}
        />
        <Stack.Screen
            name={Routes.HOME}
            component={Home}
            options={{ 
                title: 'Awesome Files',
                headerStyle: {
                    backgroundColor: COLORS.PRIMARY,
                },
                headerTintColor: COLORS.LIGHT,
                headerTitleStyle: {
                    fontWeight: 'bold'
                },
                headerLeft: () => (
                    <></>
                )
            }}
        />
    </Stack.Navigator>
)

const RootStack = createNativeStackNavigator<RootStackParamList>()

const AppRoutes = () => (
    <RootStack.Navigator initialRouteName={Routes.APP_ROUTE}>
        <RootStack.Screen
            name={Routes.APP_ROUTE}
            component={AppStack}
            options={{ headerShown: false }}
        />
    </RootStack.Navigator>
)
export { AppRoutes }