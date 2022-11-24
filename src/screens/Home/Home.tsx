import React, { useEffect } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import {styles} from '../../styles/homeStyle'
import {getProdutos} from '../../services/ProdutoService'
import { getClienteId, getCliente } from '../../services/ClienteService';






export const Home = props => {

  useEffect(() => {
    let a = getProdutos().then((res)=>{
      res.data.map((r)=>console.log(r.nome))
     }).catch((err) => {
       console.log(err)
     })

     let b = getClienteId('15').then((res)=>{
     console.log(res.data.nomeCompleto)
     }).catch((err) => {
       console.log(err)
     })
   }, []);
  
    return (
      
      <View style={styles.homeContainer} >
        <Text style={styles.homeHeader}>Home</Text>
      </View>
       
    );
}