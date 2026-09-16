import { veiculo } from "./veiculo.js";

export class moto extends veiculo{
    private cilindrada: number;

   

    constructor(
        marca: string,
        modelo: string,
        ano: number,
        cor: string,
        cilindrada: number,

    ) {
        super(marca,modelo,ano,cor);

        this.cilindrada = cilindrada;
       
    }

    public get getcilindrada(): number {
        return this.cilindrada;
    }

   
    public set setcilindrada(novacilindrada: number) {
        this.cilindrada = novacilindrada;
    }

}