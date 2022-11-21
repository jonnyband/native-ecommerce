import React, { useState } from "react"
import { View, Text, NativeSyntheticEvent, TextInputChangeEventData, TouchableOpacity } from "react-native"

import { CommonInput } from '../../components/Inputs/CommonInput';
import { SecureInput } from '../../components/Inputs/SecureInput';
import { ConfirmButton } from '../../components/Buttons/ConfirmButton';

import { styles } from "./styles"


export const Registration = () => {
    
 //Variáveis para obtenção dos dados digitados pelo usuário
 const [newEmail, setNewEmail] = useState<string>("");
 const [newNome, setNewNome] = useState<string>("");
 const [newCEP, setNewCEP] = useState<string>("");
 const [newPassword, setNewPassword] = useState<string>("");

 //As funções abaixo servem para alterar em tempo real a senha e o email digitado
 const onChangeNewEmail = (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
   const value = e.nativeEvent.text;
   setNewEmail(value);
 }

 const onChangeNewNome = (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
    const value = e.nativeEvent.text;
    setNewNome(value);
  }

  const onChangeNewCEP = (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
    const value = e.nativeEvent.text;
    setNewCEP(value);
  }
 
 const onChangeNewPassword = (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
   const value = e.nativeEvent.text;
   setNewPassword(value);
 }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro de Usuário</Text>
            <View style={styles.boxForm}>
                <CommonInput
                value={newEmail}
                onChange={onChangeNewEmail}

                title='Email'
                placeholder='Digite seu email'
                keyboardType="email-address"
                />
                <CommonInput
                    value={newNome}
                    onChange={onChangeNewNome}

                    title='Nome'
                    placeholder='Digite seu nome'
                />
                <CommonInput
                    value={newCEP}
                    onChange={onChangeNewCEP}

                    title='CEP'
                    placeholder='Digite seu CEP'
                    keyboardType="decimal-pad"
                    maxLength={8}
                />
                <SecureInput
                    value={newPassword}
                    onChange={onChangeNewPassword}

                    title='Senha'
                    placeholder='Digite sua senha'
                    secureTextEntry={true}
                />
            </View>
            <ConfirmButton
                title={'Criar conta'}
            />
             <View style={styles.boxLogin}>
                <Text>Ainda não possui uma conta?
                </Text>
                    <TouchableOpacity>
                    <Text style={styles.login}>Criar conta</Text>
                    </TouchableOpacity>
            </View>
        </View>
    )
}