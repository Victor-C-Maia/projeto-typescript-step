let nome: string = "Mundo";

console.log(`Olá, ${nome}!`);


type Pessoa = {
  nome: string;
  saldo: number;
};

const exemplo: Pessoa = {
  nome: "Fabio",
  saldo: 3000,
};

function deposito(saldoCliente: number, valorDeposito: number): number {
  return saldoCliente + valorDeposito;
}

console.log(deposito(exemplo.saldo, 152));
          