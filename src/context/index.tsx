import React, { createContext, useState, useEffect  } from "react";
import { CartContext } from "../interfaces/CartContext";
import { Produto } from "../interfaces/Produto";
import { ItemPedido } from "../interfaces/ItemPedido";


export const Context = React.createContext<CartContext | null >(null)
export const CartContent = ({ children }) => {
    const [cart, setCart] = useState<ItemPedido[]>([])


    function addProduct(product:Produto) {
          
        let a:ItemPedido = {
            quantidade:1,
            precoVenda:1,
            percentualDesconto:0.0,
            valorBruto:product.valorUnitario,
            valorLiquido:0.0,
            produto:product
              
        }
        setCart([...cart, a])
        console.log(cart)
    }

    
    function addAmount(e:number, c:ItemPedido) {
          

         setCart(cart.map((i)=> {if(i.produto.id === c.produto.id){
            i.quantidade = e;
        }
        return i;}
        ))
     
    }

    function removeProduct(id:number) {
        
        setCart([...cart.filter(c=>c.produto.id!==id)])
        console.log(cart)
    }

    function removeAllProducts() {
        setCart([])
        console.log(cart)
    }

    return (
        <Context.Provider
            value={{cart, addProduct,addAmount,removeProduct,removeAllProducts}}
        >
            {children}
        </Context.Provider>
    )
}