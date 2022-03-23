import { StyleSheet, StatusBar } from 'react-native'
import { COLORS } from '../../theme'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: COLORS.BACKGROUND
    },
    item: {
      backgroundColor: '#FFF',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 14,
    },
})