// let nome: string = "Mundo";

// console.log(`Olá, ${nome}!`);


// type Pessoa = {
//   nome: string;
//   saldo: number;
// };

// const exemplo: Pessoa = {
//   nome: "Fabio",
//   saldo: 3000,
// };

// function deposito(saldoCliente: number, valorDeposito: number): number {
//   return saldoCliente + valorDeposito;
// }

// console.log(deposito(exemplo.saldo, 152));
          

type Conta = {
  titular: string;
  saldo: number;
};

const contaTitular: Conta = {
  titular: "Chico",
  saldo: 1000000,
};

function saque(saldoAtual: number, valorSaque: number): number {
  return saldoAtual - valorSaque;
}

const saldoFinal = saque(contaTitular.saldo, 500);

console.log(`Saldo de ${contaTitular.titular}: ${saldoFinal}`);
                