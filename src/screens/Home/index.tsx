import React from 'react'
import { 
    View, 
    KeyboardAvoidingView, 
    Platform, 
    Text 
} from 'react-native'
import useAuth from '../../hooks/useAuth'

export function Home() {

    const { userToken } = useAuth()

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <View> 
                <Text>
                    Hello World
                </Text>
            </View>
        </KeyboardAvoidingView>
    )
}