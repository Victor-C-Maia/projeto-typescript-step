"use strict";
// let nome: string = "Mundo";
Object.defineProperty(exports, "__esModule", { value: true });
const contaTitular = {
    titular: "Chico",
    saldo: 1000000,
};
function saque(saldoAtual, valorSaque) {
    return saldoAtual - valorSaque;
}
const saldoFinal = saque(contaTitular.saldo, 500);
console.log(`Saldo de ${contaTitular.titular}: ${saldoFinal}`);
