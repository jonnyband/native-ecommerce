import React from "react";
import { ItemPedido } from "./Models/ItemPedido";
import { Produto } from "./Models/Produto";

export interface CartContext{

    cart:ItemPedido[],
    addProduct: (produto:Produto) => void;
    addAmount: (e:number, c:ItemPedido ) => ItemPedido | void;
    removeProduct: (id:number) => void;
    removeAllProducts: () => void;
    
    
}

export interface CartProviderProps {
    children: React.ReactNode
} 