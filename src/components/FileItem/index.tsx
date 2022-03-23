import React from 'react'
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'

import { styles } from './styles'
import { COLORS } from '../../theme'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { IFile, IFileData } from '../../constants/IFile'
import RNFS from 'react-native-fs'
import downloadAPI from '../../service/downloadAPI'

import useSnackbar from '../../hooks/useSnackbar'
import useAuth from '../../hooks/useAuth'

type Props = {
    file: IFile
}

export function FileItem({ file }: Props) {

    const fileData = file.item as IFileData
    const { userToken } = useAuth()
    const { success, error } = useSnackbar()

    async function handleDownload(path: string) {
        const filePath = `${RNFS.DocumentDirectoryPath}${path}`
        const config = {
            headers: { 
                Authorization: userToken, 
                'Dropbox-API-Arg': `{"path": "${path}"}`, 
            }
        }
        downloadAPI.post('/files/download', {}, config)
            .then((res: any) => {
                
                RNFS.writeFile(filePath, res, 'utf8').then(() => {
                    success(`File successfully downloaded: ${filePath}`)
                })
                .catch(err => {
                    console.log(err)
                    error('Something went wrong :(')
                })

            }).catch((err: Error) => console.log(err))
    }

    return (
        <View style={styles.item}>
            <Text style={styles.title}>{fileData.name}</Text>
            <TouchableOpacity onPress={() => handleDownload(fileData.path_display)}>
                <MaterialCommunityIcons 
                    name="download"
                    size={25}
                    color={COLORS.SECONDARY}
                />
            </TouchableOpacity>
        </View>
    )
}