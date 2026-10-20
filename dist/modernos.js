"use strict";
// src/modernos.ts
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    tema: null,
    idioma: "pt-BR"
};
const temaUsado = config.tema ?? "dark";
const idiomaUsado = config.idioma ?? "en";
console.log(`Tema: ${temaUsado}`); // "dark" (null → usa padrão)
console.log(`Idioma: ${idiomaUsado}`); // "pt-BR" (não é null → mantém)
const empresaComFilial = {
    nome: "TechCorp",
    filial: {
        endereco: {
            cidade: "Rio de Janeiro"
        }
    }
};
const empresaSemFilial = {
    nome: "StartupSolo"
};
console.log(empresaComFilial.filial?.endereco?.cidade); // "Rio de Janeiro"
console.log(empresaSemFilial.filial?.endereco?.cidade); // undefined (sem erro)
function processarResultado(resultado) {
    switch (resultado.status) {
        case "carregando":
            console.log("Buscando dados...");
            break;
        case "sucesso":
            console.log(`${resultado.dados.length} itens encontrados`);
            break;
        case "erro":
            console.log(`Falha: ${resultado.erro}`);
            break;
    }
}
processarResultado({ status: "sucesso", dados: ["item1", "item2"] });
