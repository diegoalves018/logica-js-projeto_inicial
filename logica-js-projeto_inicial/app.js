alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = parseInt(Math.random() * 20 + 1);
console.log(numeroSecreto)
let numChute;
let tentativas = 1;
let numCorreto = false;

// enquanto chute não for igual ao n.s.
while (numChute != numeroSecreto) {
    numChute = prompt('Escolha um número entre 1 e 20');
    // verificacao entre 1 a 20
    if (numChute < 1 || numChute > 20){
        alert('O número escolhido está fora das opções. Tente novamente!')

    }else
    // se chute for igual ao número secreto
    if (numChute == numeroSecreto) {
       break;
    } else {
        if (numChute > numeroSecreto) {
            alert(`O número secreto é menor que ${numChute}`)
        } else {
            alert(`O número secreto é maior que ${numChute}`)
        }
        // tentativas = tentativas + 1
        tentativas++
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
