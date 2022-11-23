import React, { useState } from 'react';
import { Text, View, TouchableOpacity, NativeSyntheticEvent,TextInputChangeEventData, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { CommonInput } from '../../components/Inputs/CommonInput';
import { SecureInput } from '../../components/Inputs/SecureInput';
import { ConfirmButton } from '../../components/Buttons/ConfirmButton';

import { styles } from './styles'


export const Login = props => {

  //Variáveis para obtenção dos dados digitados pelo usuário
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  //As funções abaixo servem para alterar em tempo real a senha e o email digitado
  const onChangeEmail = (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
    const value = e.nativeEvent.text;
    setEmail(value);
  }

  const onChangePassword = (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
    const value = e.nativeEvent.text;
    setPassword(value);
  }
    return (
      <View style={styles.container} >
        <Text style={styles.title}>Login</Text>
        <View style={styles.inputBox}>
          <CommonInput
              value={email}
              onChange={onChangeEmail}

              title='Email'
              placeholder='Digite seu email'
              keyboardType="email-address"
          />
          <SecureInput
              value={password}
              onChange={onChangePassword}

              title='Senha'
              placeholder='Digite sua senha'
              secureTextEntry={true}
          />
        </View>
        <Button
          title='Entrar'
          onPress={(e)=>props.navigation.navigate('Home')}
        />
        <View style={styles.boxCreateAcc}>
          <Text>Ainda não possui uma conta?
          </Text>
            <TouchableOpacity>
              <Text style={styles.createAcc}
              onPress={(e)=>props.navigation.navigate('Registro')}
              >Criar conta</Text>
            </TouchableOpacity>
        </View>

        </View>
    );
}