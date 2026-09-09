export class PessoaFisica{
private cpf: string;
private nome: string;
private telefone: string;
private email: string;
private dataNascimento: string;

constructor(
    cpf: string,
    nome:string,
    telefone:string,
    email:string,
    dataNascimento:string,
){
    this.cpf = cpf;
    this.nome = nome;
    this.telefone = telefone;
    this.email = email;
    this.dataNascimento = dataNascimento;
}

public get getCPf():string{ return this.cpf ;}
public get getnome():string{ return this.nome ;}
public get gettelefone():string{ return this.telefone ;}
public get getemail():string{ return this.email ;}
public get getDataNascimento():string{ return this.dataNascimento ;}

public set setNome(novoNome: string) {
    if(novoNome.trim().length === 0){
console.log("\n ERRO: O nome não pode ser vazio! ")
    }
    this.nome = novoNome
}
public set setTelefone(novoTelefone: string) {
    if(novoTelefone.trim().length === 0){
console.log("\n ERRO: O Telefone não pode ser vazio! ")
    }
    this.nome = novoTelefone
}
public set setEmail(novoEmail: string) {
    if(novoEmail.trim().length === 0){
console.log("\n ERRO: O nome não pode ser vazio! ")
    }
    this.nome = novoEmail
}
public set setDataNascimento(novoDataNascimento: string) {
    if(novoDataNascimento.trim().length === 0){
console.log("\n ERRO: O nome não pode ser vazio! ")
    }
    this.nome = novoDataNascimento
}

}