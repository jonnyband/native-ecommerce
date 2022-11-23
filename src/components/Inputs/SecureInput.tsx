
import React, {useState} from "react"
import { View, Text, TextInput, TouchableOpacity } from "react-native"


import { InputProps } from "../../interfaces/Props/Input"
import { Feather } from '@expo/vector-icons'; 

import { styles } from "./style"

export const SecureInput = ({title, placeholder, ...rest} : InputProps) => {

    const [secure, setSecure] = useState<boolean>(true);
    const [eye, setEye] = useState<string>("eye");
    const handleSecure = () => {
        if(secure === true){
            setEye('eye-off')
            setSecure(false)
            
        } else{ 
            setEye('eye')
            setSecure(true)
        }
    }

    

    return(
        <View>
            <Text style={styles.text}>
                {title}
            </Text>
            <View style={styles.secureView}>
                <TextInput
                    {...rest}
                    style={styles.textInput}
                    placeholder={placeholder}
                    
                    
                    selectionColor={'#416196'}
                    secureTextEntry={secure}
                    autoCapitalize="none"
                >
                </TextInput>
                <TouchableOpacity
                 activeOpacity={0.2}
                 style={styles.eyeIcon}
                 onPress={() => handleSecure()}
                >
                    <Feather
                        name={eye}
                        size={22}
                        color="black"
                    /> 
                </TouchableOpacity>
            </View>
        </View>
    )
}