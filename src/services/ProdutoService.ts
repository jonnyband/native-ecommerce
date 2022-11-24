import { AxiosResponse } from "axios";
import { Produto } from "../interfaces/Models/Produto";
import { api } from "./api";

const url:string = 'produtos/'


export function getProdutos() : Promise<AxiosResponse<Produto[]>> {
    return api.get(url);
}

export function putProdutos(produto:Produto){
    return api.put(url+produto.id, produto)
}