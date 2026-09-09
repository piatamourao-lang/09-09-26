import { PessoaFisica } from "./Pessoafisica.js"
export class Clinete extends PessoaFisica{
    private clienteDesde:string;

    constructor(
        cpf: string,
        nome: string,
        telefone: string,
        email:string,
        dataNascimento: string,
        clienteDesde: string
   ){
    super(cpf, nome, telefone, dataNascimento, clienteDesde);
    this.clienteDesde = clienteDesde;

   }
   public get getClienteDesde():string{ return this.clienteDesde ;}
   public set setClienteDesde(novoClienteDesde: string) {
    if(novoClienteDesde.trim().length === 0){
console.log("\n ERRO: O nome não pode ser vazio! ")
return;
    }
    this.clienteDesde = novoClienteDesde
}
}