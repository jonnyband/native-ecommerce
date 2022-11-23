import { AxiosResponse } from "axios";
import { Pedido } from "../interfaces/Models/Pedido";
import { api } from "./api";

const url:string = 'pedido'


export function getPedido() : Promise<AxiosResponse<Pedido[]>> {
    return api.get(url);
}

export function postPedido(pedido : Pedido) : Promise <AxiosResponse<Pedido>> {
    return api.post(url, pedido);
}