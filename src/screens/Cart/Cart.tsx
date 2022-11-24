import React, { useEffect, useState, useContext } from 'react';
import { Text, View, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import {styles} from '../Home/styles'
import {putProdutos} from '../../services/ProdutoService'
import { Context } from '../../context';

import { getClienteId, getCliente } from '../../services/ClienteService';
import { Produto } from '../../interfaces/Models/Produto';
import { FlatList } from 'react-native-gesture-handler';
import { SelectList } from 'react-native-dropdown-select-list'
import { CartButton } from '../../components/CartButton/CartButton';
import { postPedido } from '../../services/PedidoService';
import { Pedido } from '../../interfaces/Models/Pedido';

export const Carrinho = () => {
    const { cart, removeProduct, removeAllProducts, addAmount } = useContext(Context)


    useEffect(() => {
        setFullPrice(orderTotal())
    }, [cart])



    const [order, setOrder] = useState<Pedido>(
        {
            status: 'PROCESSANDO',
            cliente: { id: 23 },
            listaItemPedido:
                cart
        }
    )

    const [fullPrice, setFullPrice] = useState(
        orderTotal()
    )


    function setAmount(e, c) {

        addAmount(e, c)
        setOrder({ ...order, listaItemPedido: cart }
        )
       
    }

    function removeItem(id) {
        removeProduct(id)
    }



    function orderTotal() {

        let soma = 0
        cart.map(c => {
            soma += c.valorBruto * c.quantidade
        })
        return soma;


    }



    function buyOrder(order:Pedido) {

        postPedido(order).then((res)=>{
            console.log(res.data)
            order.listaItemPedido.map((c) => {
                c.produto.quantidadeEstoque -= c.quantidade
                console.log(c.produto.id)
                putProdutos(c.produto)
            }
                ,
                removeAllProducts())}
        ).catch((error) => {
            console.log(error)
        })

    }


    return (
<View>
        <FlatList
          style={styles.container}
          numColumns={2}
          data={cart}
          renderItem={({item}) =>
          {
            return(
              <View  style={styles.cardProduct} >
                <Image style={styles.productImage} source={{uri:`data:image/png;base64,${item.produto.imagem}`}}></Image>
                {/* <View style={{backgroundColor:'red', height:30, width:30}}></View> */}
                <Text
                  style={styles.productName}
                >{item.produto.nome}</Text>
                <Text style={styles.productQuantity}>
                  Quantidade: {item.quantidade} 
                </Text>
                {/* <SelectList
                boxStyles={{borderRadius:0}}
                data={Array.from({ length: item.produto.quantidadeEstoque }, (_, i) =>{return {key:i, value:i + 1}})}
                setSelected={(value)=>setAmount(value, item)}
                save="value"
                defaultOption={{ key:0, value:1}}
                /> */}
                <Text style={styles.productPrice}>R$ {item.valorBruto.toFixed(2)}</Text>
                <TouchableOpacity 
                  activeOpacity={0.7}
                  style={styles.cartBtn}
                  onPress={()=>{removeItem(item.produto.id)}}
                >
                  <CartButton/>
                </TouchableOpacity>
</View>
            )
          }}   
        />     
        <Text>R${isNaN(fullPrice)?0: fullPrice}</Text>
        <Button
        title='Finalizar'
        onPress={() => { buyOrder(order) }}
        ></Button>
        </View>
      );

    
}