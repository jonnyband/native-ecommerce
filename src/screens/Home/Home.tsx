import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, Button, Image } from 'react-native';
import {styles} from '../../styles/homeStyle'
import {getProdutos} from '../../services/ProdutoService'
import { Produto } from '../../interfaces/Models/Produto';
import { FlatList } from 'react-native-gesture-handler';






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
      data={produtos}
      renderItem={({item}) =>
    {
      return(
<View  style={styles.homeContainer} >
        <Image style={{height:60, width:60}} source={{uri:`data:image/png;base64,${item.imagem}`}}></Image>
        {/* <View style={{backgroundColor:'red', height:30, width:30}}></View> */}
        <Text style={styles.homeHeader}>{item.nome}</Text>
      </View>
      )
    }}
      
      
      />

  
       
    );
}