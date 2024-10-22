const estudante = {
    nome: "Bruce",
    sobrenome: "Wayne",
    idade: 30,
    telefone: 191718672,
    endereco: [{
        rua: "Gotham",
        numero: 18,
        complemento: "Arkham"
},
{
    rua: "Empresas Wayne",
    numero: 45,
    complemento: null 
}]
}


for (let dados in estudante){
    const tipo = typeof estudante[dados];
    if (tipo !== 'object' && tipo !== 'function'){
        const texto = `O dado ${dados} tem valor: ${estudante[dados]}`;
        console.log(texto);
}    
}


const chaves = Object.keys(estudante); 
console.log(`Usando Object.key: ${chaves}`);

const valor = Object.values(estudante);
console.log(`Usando Object.values: ${valor}`);

const chavesValores = Object.entries(estudante);
console.log(`Usando Object.entries: ${chavesValores}`);


function mostrarEnderecos(enderecos) {
    enderecos.forEach((end, index) => {
        console.log(`Endereço ${index + 1}:`);
        Object.entries(end).forEach(([chave, valor]) => {
            console.log(` ${chave}: ${valor !== null && valor !== undefined ? valor : 'N/A'}`);
        });
    });
}

mostrarEnderecos(estudante.endereco);

/*Object.entries(end): Para cada objeto de endereço, obtém um array de pares [chave, valor].
forEach: Itera sobre esses pares, imprimindo cada chave e seu respectivo valor.
Condição: O valor é verificado para não ser null ou undefined. Caso seja, exibe "N/A".*/


const objetoPrimeiro = { a: 1, b: 2 };
const objetoSegundo = { b: 3, c: 4 };

const objetoFusionado = Object.assign({}, objetoPrimeiro, objetoSegundo);

console.log(objetoFusionado);


const time = { nome: `SPFC x Vasco`, 
    estadio: `Morumbi`,
    ingresso: 100
}

const passagem = {
    rota:`Rio-Sao`,
    aeroporto: `Santos Dumont - congonhas`,
    aviao: `gol`
}

const viagem = { ...time, ...passagem}
console.log(viagem)