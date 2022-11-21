import React from "react"
import { View, Text, TextInput } from "react-native"


import { styles } from "./style"
import { InputProps } from "../../interfaces/Input"


export const CommonInput = ({title, placeholder, ...rest} : InputProps) => {

    return(
        <View>
            <Text style={styles.text}>
                {title}
            </Text>
            <TextInput
                style={styles.textInput}
                placeholder={placeholder}

                keyboardType="default"
                autoCorrect={false}
                autoCapitalize="none"
                selectionColor={'#416196'}
                {...rest}
                
            >
            </TextInput>
        </View>
    )
}