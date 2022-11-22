import React, { useEffect } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import {styles} from '../../styles/homeStyle'
import {getProdutos} from '../../services/ProdutoService'




useEffect(() => {
  
}, []);

export const Home = props => {


  
    return (
      
      <View style={styles.homeContainer} >
        <Text style={styles.homeHeader}>Home</Text>
      </View>
       
    );
}