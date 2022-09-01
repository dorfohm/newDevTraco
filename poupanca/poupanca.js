var saidaSaldo = document.getElementById("saldo");
var saidaExtrato = document.getElementById("extrato");
var valorHTML = document.getElementById("valor");
var poupanca = {
    saldo: 0,   
    movimentacao: [],

    dataHoraTransacao: function() {
        var dataHora = new Date();
        return dataHora;
    },

    depositar: function() {
        this.saldo += Number(valorHTML.value);
        saidaSaldo.innerHTML = "Saldo: R$" + this.saldo; 
        this.movimentacao.push(this.dataHoraTransacao() + " - " + "Depositado R$" + valorHTML.value);
        valorHTML.value = "";  
    },
    sacar: function() {       
        var valor = Number(valorHTML.value);
        if (valor > this.saldo) {
            alert("Saldo insuficiente!");          
        }
        else {
            this.saldo -= valor;
            saidaSaldo.innerHTML = "Saldo: R$" + this.saldo;  
            this.movimentacao.push(this.dataHoraTransacao() + " - " + "Sacado R$" + valorHTML.value); 
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