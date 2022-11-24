import { Produto } from "./Produto";


export interface ItemPedido{

    quantidade?:number,
    precoVenda?:number,
    percentualDesconto?:number,
    valorBruto?:number,
    valorLiquido?:number,
    produto?:Produto
}