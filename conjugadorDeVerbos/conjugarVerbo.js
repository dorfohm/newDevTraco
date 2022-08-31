function conjugarVerbo() {
    //Variáveis
    var verbo = document.getElementById("verbo").value;
    var radical = verbo.substr(0, verbo.length - 2);
    var conjugacao = verbo.substr(verbo.length - 2, verbo.length);
    switch (conjugacao) {
        //Presente
        case "ar":
            var terminacao = ['o', 'as', 'a', 'os', 'ais', 'am'];
            break;
        case "er":
            var terminacao = ['o', 'es', 'e', 'emos', 'eis', 'em'];
            break;
        case "ir":
            var terminacao = ['io', 'is', 'i', 'imos', 'is', 'em'];
            break;
        //Pretérito imperfeito
        case "ia":
            var terminacao = ['ia', 'ias', 'ia', 'íamos', 'íeis', 'iam'];
            break;
        case "va":
            var radical = verbo.substr(0, verbo.length - 3);
            var terminacao = ['ava', 'avas', 'ava', 'ávamos', 'áveis', 'avam'];
            break;
        //Futuro do presente
        case "ei":
            var radical = verbo.substr(0, verbo.length - 3);
            var terminacao = ['rei', 'rás', 'rá', 'remos', 'reis', 'rão'];
            break;
        default:
            var conjugacao = 0;
    }
    var pessoa = ['Eu', 'Tu', 'Ele', 'Nós', 'Vós', 'Eles'];
    if (conjugacao != 0) {
        for (i = 0; i <= 5; i++) {
            document.getElementById("folha").innerHTML += pessoa[i] + " " + radical + terminacao[i] + "<br>";
        }
    } else {
        document.getElementById("folha").innerHTML += "Não é um verbo válido" + "<br>";
    }
    document.getElementById("folha").innerHTML += "<br>"
}
function limparTela() {
    document.getElementById("folha").innerHTML = "";
}
