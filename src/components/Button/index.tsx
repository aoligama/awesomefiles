import React from 'react'
import {
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
    ColorValue,
    ActivityIndicator
} from 'react-native'
import { styles } from './styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

type Props = TouchableOpacityProps & {
    title: string
    color: ColorValue
    backgroundColor: ColorValue
    isLoading?: boolean
    icon?: string
}

export function Button({
    title,
    color,
    backgroundColor,
    isLoading = false,
    icon,
    ...rest
}: Props) {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor }]}
            activeOpacity={0.7}
            disabled={isLoading}
            {...rest}
        >
            {
                isLoading ? <ActivityIndicator color={color} /> :
                <>
                    <Text>
                        {
                            icon && (
                                <MaterialCommunityIcons name={icon ?? ''} size={25} color={color} />
                            )
                        }
                    </Text>
                    <Text style={[styles.title, { color }]}>
                        {title}
                    </Text>
                </>
            }
        </TouchableOpacity>
    )
}