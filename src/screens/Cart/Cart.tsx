import React, { useEffect, useState, useContext } from 'react';
import { Text, View, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import { styles } from '../Home/styles'
import { putProdutos } from '../../services/ProdutoService'
import { Context } from '../../context';

import { AntDesign } from '@expo/vector-icons'; 


import { getClienteId, getCliente } from '../../services/ClienteService';
import { Produto } from '../../interfaces/Models/Produto';
import { FlatList } from 'react-native-gesture-handler';
import { CartButton } from '../../components/CartButton/CartButton';
import { postPedido } from '../../services/PedidoService';
import { Pedido } from '../../interfaces/Models/Pedido';
import { ItemPedido } from '../../interfaces/Models/ItemPedido';

export const Carrinho = () => {
    const { cart, removeProduct, removeAllProducts, addAmount, minusAmount } = useContext(Context)


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


    function setAmount(c:ItemPedido) {

        addAmount(c)
        console.log(c.quantidade)
        setOrder({ ...order, listaItemPedido: cart }
        )

    }

    function setMinusAmount(c:ItemPedido) {

        minusAmount(c)
        console.log(c.quantidade)
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



    function buyOrder(order: Pedido) {

        postPedido(order).then((res) => {
            console.log(res.data)
            order.listaItemPedido.map((c) => {
                c.produto.quantidadeEstoque -= c.quantidade
                console.log(c.produto.id)
                putProdutos(c.produto)
            }
                ,
                removeAllProducts())
        }
        ).catch((error) => {
            console.log(error)
        })

    }


    return (
        <View>
            <FlatList
                style={styles.container}
                numColumns={1}
                data={cart}
                renderItem={({ item }) => {
                    return (
                        <View style={{height:500}} >
                            <Image style={styles.productImage} source={{ uri: `data:image/png;base64,${item.produto.imagem}` }}></Image>
                            {/* <View style={{backgroundColor:'red', height:30, width:30}}></View> */}
                            <Text
                                style={styles.productName}
                            >{item.produto.nome}</Text>
                            <AntDesign onPress={()=>{setMinusAmount(item)}} name="minuscircleo" size={24} color="black" />
                            <Text style={styles.productQuantity}>
                                Quantidade: {item.quantidade}
                            </Text>
                            
                            <AntDesign onPress={()=>{setAmount(item)}} name="pluscircleo" size={24} color="black" />
                    
                            <Text style={styles.productPrice}>R$ {item.valorBruto.toFixed(2)}</Text>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                style={styles.cartBtn}
                                onPress={() => { removeItem(item.produto.id) }}
                            >
                                <CartButton />
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
            <Text>R${isNaN(fullPrice) ? 0 : fullPrice}</Text>
            <Button
                title='Finalizar'
                onPress={() => { buyOrder(order) }}
            ></Button>
        </View>
    );


}