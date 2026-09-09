import { PessoaFisica } from "./Pessoafisica.js";

export class Funcionario extends PessoaFisica{
    private registro: string;
    private carteiraTrabalho: string;
    private pis: string;

    constructor(
        cpf: string,
        nome: string,
        telefone: string,
        email: string,
        dataNascimento: string,
        registro: string,
        carteiraTrabalho: string,
        pis: string
    ) {
        super(cpf, nome, telefone, email, dataNascimento);
        this.registro = registro;
        this.carteiraTrabalho = carteiraTrabalho;
        this.pis = pis;
    }
    public get getRegistro (): string { return this.registro; }

    public set setRegistro(novoRegistro: string) {
        if (novoRegistro.trim().length === 0) {
            console.log("\n ERRO: O registro não pode estar vazia! ")
        }
        this.registro = novoRegistro;
        return;
    }
    public get getCarteiraTrabalho (): string { return this.carteiraTrabalho; }

    public set setCarteiraTrabalho(novoCarteiraTrabalho: string) {
        if (novoCarteiraTrabalho.trim().length === 0) {
            console.log("\n ERRO: A carteira de trabalho não pode estar vazia! ")
        }
        this.carteiraTrabalho = novoCarteiraTrabalho;
        return;
    }
    public get getPis (): string { return this.pis; }

    public set setPis(novoPis: string) {
        if (novoPis.trim().length === 0) {
            console.log("\n ERRO: O pis não pode estar vazio! ")
        }
        this.pis = novoPis;
        return;
    }
}
