import React, { useState } from 'react';
import { Text, View, TouchableOpacity, NativeSyntheticEvent,TextInputChangeEventData, Button, Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { CommonInput } from '../../components/Inputs/CommonInput';
import { SecureInput } from '../../components/Inputs/SecureInput';
import { ConfirmButton } from '../../components/ConfirmButton/ConfirmButton';
import { getClienteId, getCliente } from '../../services/ClienteService';
import { AsyncStorage } from 'react-native';
import Logo from '../../../assets/logo.png';

import { styles } from './styles'


export const Login = props => {
  
  //Variáveis para obtenção dos dados digitados pelo usuário
  const [id, setId] = useState<string>();
  const [typedCpf, setTypedCpf] = useState<string>();
  
  //As funções abaixo servem para alterar em tempo real a senha e o email digitado
  const onChangeId = (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
    const value = e.nativeEvent.text;
    setId(value);
  }
  
  const onChangeTypedCpf = (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
    const value = e.nativeEvent.text;
    setTypedCpf(value);
  }
  

    
    const storeData = async () => {
      try {
          await AsyncStorage.setItem('@id', id)
      } catch (e) {
  
      }
  }

  const getData = async () => {
    try {
       return await AsyncStorage.getItem('@id')
        
    } catch (e) {
        // error reading value
    }
}

  function Signin () {

    let cpf:string
    
    getClienteId(id).then((res) => {cpf = res.data.cpf;
      storeData
      console.log(getData)
   })
    .catch((err) => {
      console.log(err)
      }).finally(() => {
       
        if(cpf == typedCpf){
          return (
            props.navigation.navigate('Home')
          )
        } else{
          alert('ID ou CPF inválido')
        } 
      }  
    )
  }
  
    return (
      <View style={styles.container} >
        <Image style={styles.image} source={Logo}/>
        <Text style={styles.title}>Login</Text>
        <View style={styles.inputBox}>
          <CommonInput
              value={id}
              onChange={onChangeId}

              title='ID'
              placeholder='Digite seu ID'
              keyboardType="email-address"
          />
          <SecureInput
              value={typedCpf}
              onChange={onChangeTypedCpf}

              title='CPF'
              placeholder='Digite seu CPF'
              secureTextEntry={true}
          />
        </View>

        <TouchableOpacity
          onPress={() => Signin()}
        >
          <ConfirmButton
            title='Entrar'
          />
        </TouchableOpacity>
      
        <View style={styles.boxCreateAcc}>
          <Text>Ainda não possui uma conta?
          </Text>
            <TouchableOpacity

            onPress={()=>{props.navigation.navigate('Registration')}}
            
            >
              <Text style={styles.createAcc}>
                Criar conta
              </Text>
            </TouchableOpacity>
        </View>

      </View>
    );
}