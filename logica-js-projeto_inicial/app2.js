let numMax = 10;
let tentativas = 1;
let chances = 5; 

var element = document.getElementById('numChute').value;

function refresh(){
        var element = document.getElementById('numChute').value;
        element = document.getElementById('numChute').value='';
       // element.value = '';
        
        numSecreto = parseInt(Math.random() * numMax + 1);
        tentativas = 1;
        chances = 5;

        alert(`Você possui ${chances} chances!`);

        console.log('Num secreto: '+ numSecreto);

}

refresh();

function verifyNumber(){  

    let palavraChance = chances > 1 ? 'chances' : 'chance';

do {
    // pegando o valor digitado
    let valorDigitado = document.getElementById('numChute');
    let numChute = valorDigitado.value;


    // verificacao entre 1 a numMax
    if (numChute < 1 || numChute > numMax){
        alert('O número escolhido está fora das opções. Tente novamente!');

    }else
    // se chute for igual ao número secreto
    if (numChute == numSecreto) {

        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        alert(`Isso ai! Você descobriu o número secreto ${numSecreto} com ${tentativas} ${palavraTentativa}`);
        refresh();
        break;
       
    } else 
    // se chute é maior ou menor
        if (numChute > numSecreto) {
            alert(`O número secreto é menor que ${numChute}.`);   
            tentativas++;
            chances--;          
                
        } else {
            alert(`O número secreto é maior que ${numChute}.`);
            tentativas++;
            chances--;
        }
        console.log('Num tentativas: '+ tentativas);  
        console.log('Num chance: '+ chances);
        
   
        if (chances > 0){        
            alert(`Você possui ${chances} ${palavraChance}!`);
        }else{
            alert(`Vc terminou com suas chances! O número secreto era ${numSecreto}. Tente novamente!`);
            refresh();
        }
    //return;             
    element = document.getElementById('numChute').value='';
} while (numChute != numSecreto && chances < 1)

}
