function cardapio(ds) {

    var mistura;

    switch(ds) {
        case "segunda":
            mistura = "Bife à milanesa";
            break;
        case "terça":
            mistura = "Frango grelhado";
            break;
        case "quarta":
            mistura = "Lasanha";
            break;
        case "quinta":
            mistura = "Filé de pescada";
            break;
        case "sexta":
            mistura = "Almondegas";
            break;
        case "sábado":
            mistura = "Filé à parmegiana";
            break;
        case "domingo":
            mistura = "Frango assado";
            break;
        default:
            mistura = "Dia da semana não informado";
    }

    return mistura;
    
}