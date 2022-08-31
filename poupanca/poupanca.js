var saidaSaldo = document.getElementById("saldo");
var saidaExtrato = document.getElementById("extrato");
var valorHTML = document.getElementById("valor");
var poupanca = {
    saldo: 0,
    movimentacao: [],

    depositar: function() {
        this.saldo += Number(valorHTML.value);
        saidaSaldo.innerHTML = this.saldo; 
        this.movimentacao.push("Depósito de " + valorHTML.value);
        valorHTML.value = "";  
    },
    sacar: function() {       
        var valor = Number(valorHTML.value);
        if (valor > this.saldo) {
            alert("Saldo insuficiente!");          
        }
        else {
            this.saldo -= valor;
            saidaSaldo.innerHTML = this.saldo;  
            this.movimentacao.push("Saque de " + valorHTML.value); 
        }
        valorHTML.value = "";
    },
    exibirExtrato: function() {
        saidaExtrato.innerHTML = "Extrato" + "<br>";
        for(i=0; i<=this.movimentacao.length-1; i++){
            saidaExtrato.innerHTML += this.movimentacao[i] + "<br>";
        }
    }
}