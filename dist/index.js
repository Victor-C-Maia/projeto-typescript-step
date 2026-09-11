"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let nome = "Mundo";
console.log(`Olá, ${nome}!`);
const exemplo = {
    nome: "Fabio",
    saldo: 3000,
};
function deposito(saldoCliente, valorDeposito) {
    return saldoCliente + valorDeposito;
}
console.log(deposito(exemplo.saldo, 152));
