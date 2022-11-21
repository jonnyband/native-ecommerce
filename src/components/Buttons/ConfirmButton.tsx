import React from "react"
import { View, Text, TextInput, TouchableOpacity } from "react-native"


import { styles } from "./style"

export const ConfirmButton = () => {

    return(
        <TouchableOpacity 
            activeOpacity={0.7}
            style={styles.button}
        >
            <Text style={styles.text}>Entrar</Text>
        </TouchableOpacity>
    )
}