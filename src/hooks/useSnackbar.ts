import Snackbar from 'react-native-snackbar'
import { useCallback } from 'react'
import { COLORS } from '../theme'

const useSnackbar = () => {
    const error = useCallback((text: string) => {
        Snackbar.show({
            text: text,
            duration: Snackbar.LENGTH_SHORT,
            backgroundColor: COLORS.ERROR,
            textColor: COLORS.WHITE
        })
    }, [COLORS.WHITE, COLORS.ERROR])

    const success = useCallback((text: string) => {
        Snackbar.show({
            text: text,
            duration: Snackbar.LENGTH_SHORT,
            backgroundColor: COLORS.SUCCESS,
            textColor: COLORS.WHITE
        })
    }, [COLORS.WHITE, COLORS.SUCCESS])

    const warning = useCallback((text: string) => {
        Snackbar.show({
            text: text,
            duration: Snackbar.LENGTH_SHORT,
            backgroundColor: COLORS.WARNING,
            textColor: COLORS.WHITE
        })
    }, [COLORS.WHITE, COLORS.WARNING])

    return {
        error,
        success,
        warning
    }
}

export default useSnackbar