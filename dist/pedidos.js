"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// --- Enums ---
var StatusPedido;
(function (StatusPedido) {
    StatusPedido["Novo"] = "NOVO";
    StatusPedido["EmPreparo"] = "EM_PREPARO";
    StatusPedido["Enviado"] = "ENVIADO";
    StatusPedido["Entregue"] = "ENTREGUE";
    StatusPedido["Cancelado"] = "CANCELADO";
})(StatusPedido || (StatusPedido = {}));
var TipoPagamento;
(function (TipoPagamento) {
    TipoPagamento["Pix"] = "PIX";
    TipoPagamento["Credito"] = "CR\u00C9DITO";
    TipoPagamento["Debito"] = "D\u00C9BITO";
})(TipoPagamento || (TipoPagamento = {}));
// --- Função para processar o pedido ---
function processarPedido(status) {
    switch (status) {
        case StatusPedido.Novo:
            console.log("Pedido recebido! Aguardando confirmação do pagamento.");
            break;
        case StatusPedido.EmPreparo:
            console.log("Seu pedido está sendo preparado.");
            break;
        case StatusPedido.Enviado:
            console.log("Seu pedido foi enviado e está a caminho.");
            break;
        case StatusPedido.Entregue:
            console.log("Pedido entregue! Obrigado pela preferência.");
            break;
        case StatusPedido.Cancelado:
            console.log("Pedido cancelado. O reembolso será processado.");
            break;
    }
}
// --- Função para calcular o frete ---
function calcularFrete(regiao) {
    if (regiao === "sudeste") {
        return 18.0;
    }
    else if (regiao === "sul" || regiao === "centro-oeste") {
        return 25.0;
    }
    else {
        return 32.0;
    }
}
// --- Nullish coalescing ---
function aplicarDesconto(valor, cupomDesconto) {
    const cupomAplicado = cupomDesconto ?? "SEM_CUPOM";
    console.log(`Cupom utilizado: ${cupomAplicado}`);
    if (cupomAplicado !== "SEM_CUPOM") {
        return valor * 0.9;
    }
    return valor;
}
function exibirCliente(cliente) {
    const cidadeCliente = cliente.endereco?.cidade ?? "Cidade não cadastrada";
    const estadoCliente = cliente.endereco?.estado ?? "Estado não cadastrado";
    console.log(`Cliente: ${cliente.nome} | Localização: ${cidadeCliente}/${estadoCliente}`);
}
// --- Execução ---
processarPedido(StatusPedido.EmPreparo);
console.log(`Frete para a região Sul: R$ ${calcularFrete("sul").toFixed(2)}`);
console.log(`Valor total do pedido: R$ ${aplicarDesconto(100, null).toFixed(2)}`);
exibirCliente({
    nome: "Mariana",
    endereco: { cidade: "Curitiba", estado: "PR" }
});
exibirCliente({ nome: "Rafael" });
