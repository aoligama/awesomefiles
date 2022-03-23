import React, { useState, useEffect } from 'react'
import {
    KeyboardAvoidingView, 
    Platform,
    View,
    ActivityIndicator,
    TouchableOpacity,
    Text
} from 'react-native'

import useAuth from '../../hooks/useAuth'
import api from '../../service/dropboxAPI'

import { COLORS } from '../../theme'
import { FileList } from '../../components/FileList'
import { styles } from './styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { IFileData } from '../../constants/IFile'

export function Home() {

    const { userToken } = useAuth()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [files, setFiles] = useState<Array<Object>>([])
    const [folders, setFolders] = useState<Array<IFileData>>([])

    useEffect(() => {
        setIsLoading(true)
        const config = {
            headers: { Authorization: userToken, 'Content-Type': 'application/json', }
        }

        const payload = {
            "path": "",
            "recursive": false,
            "include_media_info": false,
            "include_deleted": false,
            "include_has_explicit_shared_members": false,
            "include_mounted_folders": true,
            "include_non_downloadable_files": true
        }
        
        api.post('/files/list_folder', payload, config)
            .then((res: any) => {
                const files = res.data.entries.filter((entry: any) => entry['.tag'] === 'file')
                setFiles(files)
                const folders = res.data.entries.filter((entry: any) => entry['.tag'] === 'folder')
                setFolders(folders)
            }).catch((err: Error) => console.log(err))
            .finally(() => {
                setIsLoading(false)
            })
    }, [])

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            {
                isLoading ? (
                    <ActivityIndicator color={COLORS.PRIMARY} />
                ) : (
                    <>
                        <View style={styles.folderWrapper}>
                            {
                                folders.map(( folder:IFileData ) => {
                                    return (
                                        <TouchableOpacity style={styles.folderComponent} key={folder.id}>
                                            <MaterialCommunityIcons 
                                                style={styles.iconSpacing}
                                                name="folder" 
                                                size={25}
                                            />
                                            <Text>{folder.name}</Text>
                                        </TouchableOpacity>
                                    )
                                })
                            }
                        </View>
                        <FileList files={files} />
                    </>
                )
            }
        </KeyboardAvoidingView>
    )
}