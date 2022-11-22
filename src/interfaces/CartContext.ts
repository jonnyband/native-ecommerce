import { ItemPedido } from "./ItemPedido";
import { Produto } from "./Produto";

export interface CartContext{

    cart:ItemPedido[],
    addProduct: (produto:Produto) => void;
    addAmount: (e:number, c:ItemPedido ) => ItemPedido | void;
    removeProduct: (id:number) => void;
    removeAllProducts: () => void;
    
    
}