"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StatusPedido;
(function (StatusPedido) {
    StatusPedido["Novo"] = "NOVO";
    StatusPedido["EmPreparo"] = "EM_PREPARO";
    StatusPedido["Enviado"] = "ENVIADO";
    StatusPedido["Entregue"] = "ENTREGUE";
    StatusPedido["Cancelado"] = "CANCELADO";
})(StatusPedido || (StatusPedido = {}));
const pedidos = [
    { id: 101, cliente: "Mariana", status: StatusPedido.Novo },
    { id: 102, cliente: "Pedro", status: StatusPedido.Cancelado },
    { id: 103, cliente: "Lucas", status: StatusPedido.EmPreparo },
    { id: 104, cliente: "Juliana", status: StatusPedido.Enviado },
    { id: 105, cliente: "Beatriz", status: StatusPedido.Cancelado },
    { id: 106, cliente: "André", status: StatusPedido.Entregue },
    { id: 107, cliente: "Camila", status: StatusPedido.Novo },
    { id: 108, cliente: "Felipe", status: StatusPedido.Enviado },
    { id: 109, cliente: "Renata", status: StatusPedido.Entregue }
];
// Contadores de pedidos
let totalNovos = 0;
let totalEmPreparo = 0;
let totalEnviados = 0;
let totalEntregues = 0;
let totalCancelados = 0;
let encontrouPreparo = false;
// Percorrer a lista de pedidos
for (const pedido of pedidos) {
    // Ignorar pedidos cancelados na contagem dos demais status
    if (pedido.status === StatusPedido.Cancelado) {
        totalCancelados++;
        console.log(`Pedido ${pedido.id} (${pedido.cliente}) foi cancelado.`);
        continue;
    }
    else {
        console.log(`Verificando pedido ${pedido.id}...`);
    }
    // Identificar o primeiro pedido em preparo
    if (pedido.status === StatusPedido.EmPreparo && !encontrouPreparo) {
        console.log(`Pedido ${pedido.id} está em preparo.`);
        encontrouPreparo = true;
    }
    // Contabilizar os pedidos de acordo com o status
    switch (pedido.status) {
        case StatusPedido.Novo:
            totalNovos++;
            break;
        case StatusPedido.EmPreparo:
            totalEmPreparo++;
            break;
        case StatusPedido.Enviado:
            totalEnviados++;
            break;
        case StatusPedido.Entregue:
            totalEntregues++;
            break;
    }
}
// Exibição do relatório final
console.log("\n========== RELATÓRIO DE PEDIDOS ==========");
console.log(`Pedidos novos: ${totalNovos}`);
console.log(`Pedidos em preparo: ${totalEmPreparo}`);
console.log(`Pedidos enviados: ${totalEnviados}`);
console.log(`Pedidos entregues: ${totalEntregues}`);
console.log(`Pedidos cancelados: ${totalCancelados}`);
console.log("==========================================");
