const estudantes = require('./estudantes.json');
// buscar endereços que não possuem cep

function filtrarPorPropriedade(lista, propriedade) {
    return lista.filter((estudante) =>{ 
        return !estudante.endereco.hasOwnProperty(propriedade);
    })    
}

const listaEndercoIncompleto = filtrarPorPropriedade(estudantes, 'cep');
console.log(listaEndercoIncompleto);