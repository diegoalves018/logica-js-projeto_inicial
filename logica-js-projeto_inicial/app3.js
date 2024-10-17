let numMax = 10;
let tentativas = 1;
let chances = 3; 

let numSecreto = parseInt(Math.random() * numMax + 1);

/*function refresh(){
    let element = document.getElementById('numChute').value;
        element = document.getElementById('numChute').value='';
        
        numSecreto = parseInt(Math.random() * numMax + 1);
        tentativas=1;
        chances = 3;

        console.log('Num secreto: '+ numSecreto);

}

refresh();*/

  

while (numChute != numSecreto && chances > 0) {
    // pegando o valor digitado
    var element = document.getElementById('numChute');
    var numChute = element.value;

    let palavraChance = chances > 1 ? 'chances' : 'chance';
        
    // verificacao entre 1 a numMax
    if (numChute < 1 || numChute > numMax){
        alert('O número escolhido está fora das opções. Tente novamente!');

    }else
    // se chute for igual ao número secreto
    if (numChute == numSecreto) {

        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        alert(`Isso ai! Você descobriu o número secreto ${numSecreto} com ${tentativas} ${palavraTentativa}`);
        //refresh();

    } else {
    // se chute é maior ou menor
        if (numChute > numSecreto) {
            alert(`O número secreto é menor que ${numChute}. Você possui ${chances} ${palavraChance}!`)
                
        } else {
            alert(`O número secreto é maior que ${numChute}. Você possui ${chances} ${palavraChance}!`)
            
        }
        
        // tentativas = tentativas + 1
        tentativas++;
        chances--;
        
                
    }
}

alert(`Vc terminou com suas chances! O número secreto era ${numSecreto}. Tente novamente!`)
//refresh();

