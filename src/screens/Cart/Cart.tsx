import React, { useEffect, useState, useContext } from 'react';
import { Text, View, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles'
import { putProdutos } from '../../services/ProdutoService'
import { Context } from '../../context';

import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 


import { getClienteId, getCliente } from '../../services/ClienteService';
import { Produto } from '../../interfaces/Models/Produto';
import { FlatList } from 'react-native-gesture-handler';
import { RemoveButton } from '../../components/RemoveButton/RemoveButton';
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
        <View style={styles.container}>
            <FlatList
                style={styles.flat}
                numColumns={2}
                data={cart}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.cardProduct} >
                            <Image style={styles.productImage} source={{ uri: `data:image/png;base64,${item.produto.imagem}` }}></Image>
                            {/* <View style={{backgroundColor:'red', height:30, width:30}}></View> */}
                            <Text
                                style={styles.productName}
                            >{item.produto.nome}</Text>

                            <View style={styles.changeAmount}>
                              <AntDesign onPress={()=>{setMinusAmount(item)}} name="minuscircleo" size={24} color="black" />
                                <Text style={styles.productQuantity}>
                                     {item.quantidade}
                                </Text>
                              <AntDesign onPress={()=>{setAmount(item)}} name="pluscircleo" size={24} color="black" />
                            </View>
                            <Text style={styles.productPrice}>Subtotal: R$ {(item.valorBruto * item.quantidade).toFixed(2)}</Text>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() => { removeItem(item.produto.id) }}
                            >
                                <RemoveButton />
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
            <View style={styles.finishBtn}>
                <Text style={styles.textPrice}>Total do pedido: R${isNaN(fullPrice) ? 0 : fullPrice.toFixed(2)}</Text>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => { buyOrder(order) }}
                >
                    <Text style={styles.finishText}>
                        Finalizar pedido
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );


}