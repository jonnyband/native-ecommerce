import React, { createContext, useState, useEffect  } from "react";
import { CartContext, CartProviderProps } from "../interfaces/CartContext";
import { Produto } from "../interfaces/Models/Produto";
import { ItemPedido } from "../interfaces/Models/ItemPedido";


export const Context = React.createContext<CartContext | null >(null)

export const CartContent = ({ children } : CartProviderProps) => {
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
        cart.map((c)=>{console.log(c.produto.nome+' '+c.quantidade)})

    }

    
    function addAmount(c:ItemPedido) {
          

         setCart(cart.map((i)=> {if(i.produto.id === c.produto.id){
            i.quantidade++;
        }
        return i;}
        ))
     
    }

    

    function minusAmount(c:ItemPedido) {
          

        setCart(cart.map((i)=> {if(i.produto.id === c.produto.id){
           i.quantidade--;
       }
       return i;}
       ))
    
   }

    function removeProduct(id:number) {
        
        setCart([...cart.filter(c=>c.produto.id!==id)])
        cart.map((c)=>{console.log(c.produto.nome+' '+c.quantidade)})
    }

    function removeAllProducts() {
        setCart([])
      
    }

    return (
        <Context.Provider
            value={{cart, addProduct,addAmount, minusAmount,removeProduct,removeAllProducts}}
        >
            {children}
        </Context.Provider>
    )
}