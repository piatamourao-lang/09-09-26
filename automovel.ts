import { veiculo } from "./veiculo.js";

export class automovel extends veiculo{
    private numeroportas: number;
    private motor: string;
   

    constructor(
        marca: string,
        modelo: string,
        ano: number,
        cor: string,
        numeroportas: number,
        motor: string,
    ) {
        super(marca,modelo,ano,cor);

        this.numeroportas = numeroportas;
        this.motor = motor;
    }

    public get getnumeroportas(): number {
        return this.numeroportas;
    }

    public get getmotor(): string {
        return this.motor;
    }

   
    public set setnumeroportas(novanumeroportas: number) {
        this.numeroportas = novanumeroportas;
    }

    public set setmotor(novomotor: string) {
        this.motor = novomotor;
    }

}