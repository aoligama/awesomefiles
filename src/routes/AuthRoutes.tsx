import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Routes, RootStackParamList } from '../constants/RootStackParams'
import { Home } from '../screens/Home'
import { COLORS } from '../theme'

const Stack = createNativeStackNavigator()

const AuthStack = () => (
    <Stack.Navigator initialRouteName={Routes.HOME} screenOptions={{
        headerShown: true
    }}>
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

const AuthRoutes = () => (
    <RootStack.Navigator initialRouteName={Routes.AUTH_ROUTE}>
        <RootStack.Screen
            name={Routes.AUTH_ROUTE}
            component={AuthStack}
            options={{ headerShown: false }}
        />
    </RootStack.Navigator>
)
export { AuthRoutes }
