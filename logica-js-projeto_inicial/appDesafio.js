/*Mostre um alerta com a mensagem "Boas vindas ao nosso site!".

Declare uma variável chamada nome e atribua a ela o valor "Lua".

Crie uma variável chamada idade e atribua a ela o valor 25.

Defina uma variável numeroDeVendas e atribua a ela o valor 50.

Defina uma variável saldoDisponivel e atribua a ela o valor 1000.

Exiba um alerta com o texto "Erro! Preencha todos os campos"

Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos" Agora exiba um alerta com o valor da variável mensagemDeErro.

Use um prompt para perguntar o nome do usuário e armazená-lo na variável nome.

Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.

Agora, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".*/

//alert("Boas vindas ao nosso site!");

/*let nome = "Lua";
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;

alert("Erro! Preencha todos os campos.");

let mensagemDeErro = "Erro! Preencha todos os campos.";
alert(mensagemDeErro);

let nome2 = prompt ("Qual seu nome?");
let idade2 = prompt("Qual sua idade?");

if (idade2 >= 18){
    alert("Pode tirar habilitação!")
}

let numeroMaximo = prompt("Digite um número para a contagem regressiva:");

while (numeroMaximo >= 0) {
    console.log(numeroMaximo);
    numeroMaximo--;
}

let numeroMaximo2 = prompt("Digite um número para a contagem progregressiva:");;
let contador = 0;

while (contador <= numeroMaximo2) {
    console.log(contador);
    contador++
}*/

let quantidadePessoas = 2
let palavraPessoa = "";

if(quantidadePessoas == 1){
    palavraPessoa = "pessoa";
}else{
    palavraPessoa = "pessoas"
}

let palavraPessoa2 = quantidadePessoas == 1 ? 'pessoas' : 'pessoa'