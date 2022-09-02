function validarCPF() {
    //Receber o CPF informado na página HTML
    var cpf = String(document.getElementById("cpf").value);
    //Armazeno a somatória de valores para o cálculo dos DV
    var soma = 0;
    //Laço que calcula a soma do primeiro DV
    for(i=0; i<=8; i++){
        soma += cpf[i] * (10-i);        
    }
    //Cálculo do primeiro DV
    var calcDV1 = 11 - (soma % 11);
    //Zerando a soma para iniciar o próximo passo
    soma = 0;
    //Laço que calcula a soma do segundo DV
    for(i=0; i<=9; i++){
        soma += cpf[i] * (11-i);
    }
    var calcDV2 = 11 - (soma % 11);
    //Verificação se os DV calculados são iguais aos DV digitados
    if(cpf[9] == calcDV1 && cpf[10] == calcDV2){
        alert("CPF é válido")
    } else{
            alert("CPF é inválido")
    }
}
