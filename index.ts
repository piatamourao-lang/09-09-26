import readLine from "readline-sync";
import { Sorvete } from "./sorvete.js";
import { Camisa } from "./camiseta.js";

console.log("======================================");
console.log("          CADASTRO DE PRODUTOS        ");
console.log("======================================");

// CADASTRO DO SORVETE
const sorvete = new Sorvete(
    1,
    "Sorvete de Chocolate",
    12.50,
    -18
);

console.log("\n===== SORVETE =====");
console.log(`ID: ${sorvete.getId}`);
console.log(`Nome: ${sorvete.getNome}`);
console.log(`Preço: R$ ${sorvete.getPreco}`);
console.log(`Temperatura adequada: ${sorvete.getTempAdequada}°C`);


// CADASTRO DA CAMISA
const camisa = new Camisa(
    2,
    "Camisa Polo",
    89.90,
    "Azul",
    "Algodão",
    "M"
);

console.log("\n===== CAMISA =====");
console.log(`ID: ${camisa.getId}`);
console.log(`Nome: ${camisa.getNome}`);
console.log(`Preço: R$ ${camisa.getPreco}`);
console.log(`Cor: ${camisa.getCor}`);
console.log(`Tecido: ${camisa.getTecido}`);
console.log(`Tamanho: ${camisa.getTamanho}`);


// ALTERAÇÃO DE DADOS
console.log("\n======================================");
console.log("       ALTERAÇÃO DA CAMISA            ");
console.log("======================================");

camisa.setCor = readLine.question("Digite uma nova cor: ");
camisa.setTamanho = readLine.question("Digite um novo tamanho: ");

console.log("\n===== CAMISA ATUALIZADA =====");
console.log(`ID: ${camisa.getId}`);
console.log(`Nome: ${camisa.getNome}`);
console.log(`Preço: R$ ${camisa.getPreco}`);
console.log(`Cor: ${camisa.getCor}`);
console.log(`Tecido: ${camisa.getTecido}`);
console.log(`Tamanho: ${camisa.getTamanho}`);