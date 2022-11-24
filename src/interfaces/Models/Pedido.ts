import { Cliente } from "./Cliente";
import { ItemPedido } from "./ItemPedido";


export interface Pedido{

    dataPedido?:Date,
    dataEntrega?:Date,
    dataEnvio?:Date,
    status?:string,
    cliente?:Cliente,
    listaItemPedido?:ItemPedido[]


}