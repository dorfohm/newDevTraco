import { service } from "../service/index.js";
import { view } from "../view/index.js"

export const FaturamentoComponent = () => {
    view.getFaturamentoHtml();

    let objetoFaturamento = [];

    service.getActivities().then((dados) => {
        dados.forEach(element => {
            if(element.price != null){
                objetoFaturamento.push(element);
            }
        });
        gerarObjetosDatas();
    })
}

const datasBrutas = [];

const gerarObjetosDatas = () => {
    objetoFaturamento.forEach((element) => {
        datasBrutas.push(element.checkout_at)
    })
}