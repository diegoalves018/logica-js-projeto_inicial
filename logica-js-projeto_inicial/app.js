alert('Boas vindas ao jogo do número secreto');

let numMax = 20;
let numeroSecreto = parseInt(Math.random() * numMax + 1);
console.log(numeroSecreto)
let numChute;
let tentativas = 1;
let chances = 5;


// enquanto chute não for igual ao n.s.
while (numChute != numeroSecreto && chances > 0) {
    let palavraChance = chances > 1 ? 'chances' : 'chance';
        alert(`Você possui ${chances} ${palavraChance}`)
    numChute = prompt(`Escolha um número entre 1 e ${numMax}.`);
    // verificacao entre 1 a numMax
    if (numChute < 1 || numChute > numMax){
        alert('O número escolhido está fora das opções. Tente novamente!')

    }else
    // se chute for igual ao número secreto
    if (numChute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
       break;
    } else {
        if (numChute > numeroSecreto) {
            alert(`O número secreto é menor que ${numChute}`)
        } else {
            alert(`O número secreto é maior que ${numChute}`)
        }
        
        // acrescentando tentativas e diminuindo as chances
        tentativas++;
        chances--;
    }
}

alert(`Vc terminou com suas chances! O número secreto era ${numeroSecreto}!`)