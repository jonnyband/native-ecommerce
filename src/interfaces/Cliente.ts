import { Endereco } from "./endereco"


export interface Cliente{
    email:string,
    nomeUsuario:string,
    nomeCompleto:string,
    cpf:string,
    telefone:string,
    dataNascimento:Date,
    endereco:Endereco
    
}