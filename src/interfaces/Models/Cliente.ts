import { Endereco } from "./Endereco"


export interface Cliente{
    id:number,
    email?:string,
    nomeUsuario?:string,
    nomeCompleto?:string,
    cpf?:string,
    telefone?:string,
    dataNascimento?:Date,
    endereco?:Endereco
    
}