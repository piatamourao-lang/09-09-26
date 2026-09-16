import { Produto } from "./Produto.js";

export class Camisa extends Produto {
    private cor: string;
    private tecido: string;
    private tamanho: string;

    constructor(
        id: number,
        nome: string,
        preco: number,
        cor: string,
        tecido: string,
        tamanho: string
    ) {
        super(id, nome, preco);

        this.cor = cor;
        this.tecido = tecido;
        this.tamanho = tamanho;
    }

    public get getCor(): string {
        return this.cor;
    }

    public get getTecido(): string {
        return this.tecido;
    }

    public get getTamanho(): string {
        return this.tamanho;
    }

    public set setCor(novaCor: string) {
        this.cor = novaCor;
    }

    public set setTecido(novoTecido: string) {
        this.tecido = novoTecido;
    }

    public set setTamanho(novoTamanho: string) {
        this.tamanho = novoTamanho;
    }
}