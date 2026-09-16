export class veiculo {
    private marca: string;
    private modelo: string;
    private ano: number;
    private cor: string;

    constructor(
        marca: string,
        modelo: string,
        ano: number,
        cor: string,
    ) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor =cor;
    }

    public get getmarca(): string {
        return this.marca;
    }

    public get getmodelo(): string {
        return this.modelo;
    }

    public get getano(): number {
        return this.ano;
    }
    public get getcor(): string{
        return this.cor;
    }
    public set setcor(novocor: string) {
        if (novocor.trim().length === 0) {
            console.log("\nERRO: O cor não pode ser vazio!");
            return;
        }

        this.cor = novocor;
    }

  public set setmarca(novomarca: string) {
        if (novomarca.trim().length === 0) {
            console.log("\nERRO: O marca não pode ser vazio!");
            return;
        }

        this.marca = novomarca;
    }
    public set setmodelo(novomodelo: string) {
        if (novomodelo.trim().length === 0) {
            console.log("\nERRO: O modelo não pode ser vazio!");
            return;
        }

        this.modelo = novomodelo;
    }

    public set setano(novoano: number) {
        if (novoano < 0) {
            console.log("\nERRO: O preço não pode ser menor que zero!");
            return;
        }

        this.ano = novoano;
    }
}