import React, { useState } from "react"
import { View, Text, NativeSyntheticEvent, TextInputChangeEventData, TouchableOpacity, ScrollView, Button } from "react-native"

import { postEndereco } from "../../services/EnderecoService";
import { postCliente } from "../../services/ClienteService";

import { CommonInput } from '../../components/Inputs/CommonInput';
import { SecureInput } from '../../components/Inputs/SecureInput';
import { ConfirmButton } from '../../components/ConfirmButton/ConfirmButton';

import { styles } from "./styles"
import { Endereco } from "../../interfaces/Models/Endereco";
import { Cliente } from "../../interfaces/Models/Cliente";


export const Registration = props => {
    
 //Variáveis para obtenção dos dados digitados pelo usuário
 const [newEmail, setNewEmail] = useState<string>("");
 const [newNome, setNewNome] = useState<string>("");
 const [newCPF, setNewCPF] = useState<string>("");
 const [newCEP, setNewCEP] = useState<string>("");
 const [newTelefone, setNewTelefone] = useState<string>("");
 const [newNumero, setNewNumero] = useState<string>("");
 const [newComplemento, setNewComplemento] = useState<string>("");
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

  const onChangeNewCPF = (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
    const value = e.nativeEvent.text;
    setNewCPF(value);
  }

  const onChangeNewTelefone = (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
    const value = e.nativeEvent.text;
    setNewTelefone(value);
  }


  const onChangeNewCEP = (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
    const value = e.nativeEvent.text;
    setNewCEP(value);
  }

  const onChangeNewNumero = (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
    const value = e.nativeEvent.text;
    setNewNumero(value);
  }

  const onChangeNewComplemento = (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
    const value = e.nativeEvent.text;
    setNewComplemento(value);
  }
 
 const onChangeNewPassword = (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
   const value = e.nativeEvent.text;
   setNewPassword(value);
 }

 function signUp(){

    const endereco: Endereco = {
        cep:newCEP,
        numero:parseInt(newNumero),
        complemento:newComplemento
        
    }
    let idEndereco;
    postEndereco(endereco).then(res=>idEndereco=res.data.id).catch((err)=>console.log(err)).finally(
        ()=>{
            const cliente: Cliente = {
                email:newEmail,
                nomeUsuario: newNome,
                nomeCompleto: newNome,
                cpf:newCPF,
                telefone:newTelefone,
                dataNascimento:new Date(),
                endereco:{
                    id:idEndereco
                }
          
            }
        
            postCliente(cliente).then(res=>console.log(res.data)).catch(err=>console.log(err)).
            finally(()=> console.log('Cadastrado')
            )
        
        }
    )


    




 }

    return(
        <View style={styles.container}>
            <ScrollView>
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
                    value={newCPF}
                    onChange={onChangeNewCPF}

                    title='CPF'
                    placeholder='Digite seu CPF'
                    keyboardType="decimal-pad"
                    maxLength={11}
                />
                <CommonInput
                    value={newTelefone}
                    onChange={onChangeNewTelefone}

                    title='Telefone'
                    placeholder='Digite seu Telefone'
                    keyboardType="decimal-pad"
                   
                />
                <CommonInput
                    value={newCEP}
                    onChange={onChangeNewCEP}

                    title='CEP'
                    placeholder='Digite seu CEP'
                    keyboardType="decimal-pad"
                    maxLength={8}
                />
                <CommonInput
                    value={newNumero}
                    onChange={onChangeNewNumero}

                    title='Numero'
                    placeholder='Digite seu Numero'
                    keyboardType="decimal-pad"
                   
                />
                <CommonInput
                    value={newComplemento}
                    onChange={onChangeNewComplemento}

                    title='Complemento'
                    placeholder='Digite seu Complemento'
                    
                
                />
                <SecureInput
                    value={newPassword}
                    onChange={onChangeNewPassword}

                    title='Senha'
                    placeholder='Digite sua senha'
                    secureTextEntry={true}
                />
            </View>
            <Button
                title={'Criar conta'}
                onPress={signUp}
            />
             <View style={styles.boxLogin}>
                <Text>Já possui uma conta?
                </Text>
                    <TouchableOpacity
                    onPress={()=>{props.navigation.navigate('Login')}}
                    >
                        <Text style={styles.login}>Entrar</Text>
                    </TouchableOpacity>
            </View>
            </ScrollView>
        </View>
    )
}