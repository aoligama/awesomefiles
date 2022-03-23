import { StyleSheet } from 'react-native'
import { COLORS } from '../../theme'

export const styles = StyleSheet.create({
    folderWrapper: {
        flexDirection: 'column',
        paddingHorizontal: 18,
        paddingTop: 20,
    },
    folderComponent: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        marginVertical: 5,
        backgroundColor: COLORS.WHITE
    },
    iconSpacing: {
        marginRight: 5
    }
})