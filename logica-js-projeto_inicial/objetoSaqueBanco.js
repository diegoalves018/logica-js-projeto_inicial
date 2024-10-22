const contaBancaria = {
    titular: "Pedro",
    saldo: 10000,
    depositar: function(valor) {
        this.saldo += valor;
    },

    sacar: function(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        } else {
            console.log("Saldo insuficiente para saque.");
        }
    }
};

const cliente = {
    nome: "Ronaldo",
    conta: contaBancaria
};

function mostrarSaldo(cliente) {
    console.log(`Nome do cliente: ${cliente.nome}`);
    console.log(`Saldo da conta: ${cliente.conta.saldo}`);
}

// Realize operações de depósito e saque na conta bancária do cliente
cliente.conta.depositar(500);
cliente.conta.sacar(200);

// Chame a função mostrarSaldo para exibir as informações atualizadas
mostrarSaldo(cliente)