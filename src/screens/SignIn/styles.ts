import { StyleSheet } from 'react-native'
import { COLORS } from '../../theme'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.BACKGROUND,
        paddingTop: 185
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: COLORS.SECONDARY,
        marginVertical: 20
    },
    subtitle: {
        fontSize: 14,
        fontWeight: '400',
        color: COLORS.SECONDARY,
        marginVertical: 20,
        marginBottom: 50
    }
})