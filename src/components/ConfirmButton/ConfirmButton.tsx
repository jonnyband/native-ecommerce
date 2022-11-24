import React from "react"
import { Text, View } from "react-native"

import { btnProps } from '../../interfaces/Props/Button'

import { styles } from "./style"

export const ConfirmButton = ({title}  : btnProps) => {

    return(
        <View 
            style={styles.button}
        >
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}