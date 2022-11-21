import React from "react"
import { View, Text, TextInput, TouchableOpacity } from "react-native"

import { btnProps } from '../../interfaces/Button'

import { styles } from "./style"

export const ConfirmButton = ({title}  : btnProps) => {

    return(
        <TouchableOpacity 
            activeOpacity={0.7}
            style={styles.button}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}