import { AxiosResponse } from "axios";
import { Produto } from "../interfaces/Produto";
import { api } from "./api";

const url:string = 'produtos'


export function getProdutos() : Promise<AxiosResponse<Produto[]>> {
    return api.get(url);
}