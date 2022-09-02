var saidaSaldo = document.getElementById("saldo");
var saidaExtrato = document.getElementById("extrato");
var valorHTML = document.getElementById("valor");
var poupanca = {
    saldo: 0,   
    movimentacao: [],
    dataAcumulada: [],
     
    dataHoraTransacao: function() {
        var dataHora = new Date();
        var dia = dataHora.getDate();
        var mes = dataHora.getMonth()+1;
        var ano = dataHora.getFullYear();
        var hora = (dataHora.getHours()<10?'0':'') + dataHora.getHours();
        var minuto = (dataHora.getMinutes()<10?'0':'') + dataHora.getMinutes();
        var exibir = dia + "/" + mes + "/" + ano + " ás " + hora + ":" + minuto;
        return exibir;
    },

    depositar: function() {
        var valor = Number(valorHTML.value);
        this.saldo += valor;
        saidaSaldo.innerHTML = "Saldo: R$" + this.saldo.toFixed(2); 
        this.movimentacao.push(this.dataHoraTransacao() + " - " + "Depositado R$" + valor.toFixed(2));
        valorHTML.value = "";  
    },
    sacar: function() {       
        var valor = Number(valorHTML.value);
        if (valor > this.saldo) {
            alert("Saldo insuficiente!");          
        }
        else {
            this.saldo -= valor;
            saidaSaldo.innerHTML = "Saldo: R$" + this.saldo.toFixed(2);  
            this.movimentacao.push(this.dataHoraTransacao() + " - " + "Sacado R$" + valor.toFixed(2)); 
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