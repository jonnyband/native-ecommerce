import { AxiosResponse } from "axios";
import { Endereco } from "../interfaces/Models/Endereco";
import { api } from "./api";

const url:string = 'enderecos'


export function getEndereco() : Promise<AxiosResponse<Endereco[]>> {
    return api.get(url);
}

export function postEndereco(endereco : Endereco) : Promise <AxiosResponse<Endereco>> {
    return api.post(url, endereco);
}