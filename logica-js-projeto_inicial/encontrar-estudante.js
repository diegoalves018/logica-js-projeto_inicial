const estudantes = require('./estudantes.json');

function buscarInformacao(lista, chave, valor) {
    return lista.find((estudante) => estudante[chave] === valor);
}

function buscarInformacao2(lista, chave, valor) {
    return lista.find((estudante) => estudante[chave].includes(valor)); //buscando a info dentro do array do telefone
}

const estudanteEcontrado = buscarInformacao(estudantes, 'nome', 'Kirby');
console.log(estudanteEcontrado);

const telefoneEncontrado = buscarInformacao2(estudantes, 'telefone', "31949463623");
console.log(telefoneEncontrado);