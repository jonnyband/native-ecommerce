import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import {styles} from './styles'
import {getProdutos} from '../../services/ProdutoService'

import { getClienteId, getCliente } from '../../services/ClienteService';
import { Produto } from '../../interfaces/Models/Produto';
import { FlatList } from 'react-native-gesture-handler';
import { CartButton } from '../../components/CartButton/CartButton';

export const Home = props => {

  const [produtos, setProdutos] = useState<Produto[]>()

  useEffect(() => {
    getProdutos().then((res)=>{
      setProdutos(res.data)
     }).catch((err) => {
       console.log(err)
     })
   }, []);
  
    return (

      <FlatList
        style={styles.container}
        numColumns={2}
        data={produtos}
        renderItem={({item}) =>
        {
          return(
            <View  style={styles.cardProduct} >
              <Image style={styles.productImage} source={{uri:`data:image/png;base64,${item.imagem}`}}></Image>
              {/* <View style={{backgroundColor:'red', height:30, width:30}}></View> */}
              <Text
                style={styles.productName}
                numberOfLines={2}
              >{item.nome}</Text>
              <Text style={styles.productQuantity}>
                Disponíveis: {item.quantidadeEstoque} 
              </Text>
              <Text style={styles.productPrice}>R$ {item.valorUnitario.toFixed(2)}</Text>
              <TouchableOpacity 
                activeOpacity={0.7}
                style={styles.cartBtn}
              >
                <CartButton/>
              </TouchableOpacity>
            </View>
          )
        }}   
      />     
    );
}