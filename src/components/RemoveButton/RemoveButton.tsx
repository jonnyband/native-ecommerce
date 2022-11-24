import React from "react"
import { Text, View } from "react-native"

import { styles } from "./styles"

import { Feather } from '@expo/vector-icons'; 

export const RemoveButton = () => {

    return(
        <View 
            style={styles.button}
        >
            <Text style={styles.text}>Remover Produto</Text>
            <Feather name="trash-2" size={16} color="white" />
        </View>
    )
}