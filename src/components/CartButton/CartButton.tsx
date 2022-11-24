import React from "react"
import { Text, View } from "react-native"

import { styles } from "./style"

import { FontAwesome } from '@expo/vector-icons'; 

export const CartButton = () => {

    return(
        <View 
            style={styles.button}
        >
            <Text style={styles.text}>Adicionar ao carrinho</Text>
            <FontAwesome name="cart-plus" size={16} color="white" />
        </View>
    )
}