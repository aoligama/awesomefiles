import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Routes, RootStackParamList } from '../constants/RootStackParams'
import { SignIn } from '../screens/SignIn'
import { COLORS } from '../theme'

const Stack = createNativeStackNavigator()

const UnauthStack = () => (
    <Stack.Navigator 
        initialRouteName={Routes.SIGNIN} 
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
    </Stack.Navigator>
)

const RootStack = createNativeStackNavigator<RootStackParamList>()

const UnauthRoutes = () => (
    <RootStack.Navigator initialRouteName={Routes.UNAUTH_ROUTE}>
        <RootStack.Screen
            name={Routes.UNAUTH_ROUTE}
            component={UnauthStack}
            options={{ headerShown: false }}
        />
    </RootStack.Navigator>
)
export { UnauthRoutes }
