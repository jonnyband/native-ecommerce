import { AxiosResponse } from "axios";
import { Cliente } from "../interfaces/Models/Cliente";
import { api } from "./api";

const url:string = 'clientes/'


export function getCliente() : Promise<AxiosResponse<Cliente[]>> {
    return api.get(url);
}

export function getClienteId(id) : Promise<AxiosResponse<Cliente>> {
    return api.get(url + id);
}

export function postCliente(cliente : Cliente) : Promise <AxiosResponse<Cliente>> {
    return api.post(url, cliente);
}