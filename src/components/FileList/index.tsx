import React from 'react'
import {
    FlatList,
    SafeAreaView
} from 'react-native'
import { styles } from './styles'
import { FileItem } from '../FileItem'
import { IFile } from '../../constants/IFile'

type Props = {
    files: Array<Object>
}

export function FileList({
    files
}: Props) {
    const renderItem = (file: Object) => (
        <FileItem file={file as IFile}/>
    )

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={files}
                renderItem={renderItem}
            />
        </SafeAreaView>
    )
}