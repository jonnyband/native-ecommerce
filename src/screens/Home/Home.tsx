import React, { useContext, useEffect, useState } from 'react';
import { Text, View, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import {styles} from './styles'

import {getProdutos} from '../../services/ProdutoService'
import { Produto } from '../../interfaces/Models/Produto';
import { FlatList } from 'react-native-gesture-handler';
import { CartButton } from '../../components/CartButton/CartButton';
import Container, { Toast } from 'toastify-react-native';
import { Context } from '../../context';

export const Home = props => {

  const { cart, addProduct } = useContext(Context)

  const [produtos, setProdutos] = useState<Produto[]>()

  useEffect(() => {
    getProdutos().then((res)=>{
      setProdutos(res.data)
     }).catch((err) => {
       console.log(err)
     })
   }, []);


   function add(product:Produto) {
    let con;
    cart.map((c)=>{if(c.produto.id === product.id){con=true}})
    
    if(con){
        Toast.error('Já existe!');
        console.log('Item já está em seu Carrinho!')
    }else{
        addProduct(product)
        console.log('Adicionado ao Carrinho!')
        Toast.success('Adicionado!');
    }
}
  
    return (
      <View>
        <Container
          animationStyle='zoomInOut'
          position='bottom'
          positionValue='60'
          duration= {1300}
          width= {168}
          height= {50}
        />
       
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
                  onPress={()=>{add(item)}}
                >
                  <CartButton/>
                </TouchableOpacity>
              </View>
            )
          }}   
        />
      </View>     
    );
}