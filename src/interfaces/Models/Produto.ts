import { ImageSourcePropType } from "react-native";
import { Categoria } from "./Categoria";

export interface Produto{
id:number,
nome:string,
descricao:string,
quantidadeEstoque:number,
dataCadastro:Date,
valorUnitario:number,
categoria:Categoria,
imagem:string
}