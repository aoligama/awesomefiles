import React from 'react'
import { 
    View, 
    KeyboardAvoidingView, 
    Platform, 
    Text 
} from 'react-native'

import { COLORS } from '../../theme'
import { styles } from './styles'
import { Button } from '../../components/Button'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import useAuth from '../../hooks/useAuth'

export function SignIn() {

    const { signIn, isLoading } = useAuth()

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <View style={styles.container}> 
                <MaterialCommunityIcons 
                    name="file" 
                    size={40} 
                    color={COLORS.SECONDARY}
                />
                <Text style={styles.title}>
                    Welcome to Awesome Files!
                </Text>
                <Text style={styles.subtitle}>
                    Sign In with Dropbox to continue
                </Text>
                <Button
                    title="Sign In with Dropbox"
                    backgroundColor={!isLoading ? COLORS.SECONDARY : COLORS.LIGHT}
                    color={!isLoading ? COLORS.LIGHT : COLORS.SECONDARY}
                    icon="dropbox"
                    onPress={signIn}
                />
            </View>
        </KeyboardAvoidingView>
    )
}