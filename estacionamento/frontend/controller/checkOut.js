import { service } from "../service/index.js";
import { view } from "../view/index.js";

export const checkOutComponent = (idParametro) => {
    
    view.getCheckOutHtml();
    
    service.getVeiculo().then((dados) => {
        dados.forEach(element => {
            if(element.id == idParametro){
                adicionaParametrosNaTela(element);
                buscarRegistro(idParametro);
            }
        });
    })
}

const adicionaParametrosNaTela = (objeto) => {
    const NovaLinha = document.getElementById('tbody')
    const dadosHtml = `
        <td>${objeto.owner}</td>
        <td>${objeto.model}</td>
        <td>${objeto.label}</td>
    `
    NovaLinha.innerHTML = dadosHtml;
}

const buscarRegistro = (id) => {
    service.getActivities().then((dados) => {
        dados.forEach((element) => {
            if(element.vehicle_id == id){
                adicionaParametrosNoInput(element)
            }
        })
    })
}

const valorHora = 5;
const valorMinuto = valorHora/60;

const adicionaParametrosNoInput = (element) => {
    const checkIn = new Date(element.checkin_at);
    const checkOut = new Date();
    const tempo = checkOut - checkIn;
    const hora = calculaHora(tempo);
    const totalAPagar = (hora.minutos + (hora.horas * 60)) * valorMinuto;
    const inputHora = document.getElementById('totalHora');
    const inputTotal = document.getElementById('valorPagar')

    if (hora.minutos < 10 && hora.horas < 10){
        inputHora.value = `Tempo 0${hora.horas}:0${hora.minutos}`;
    }
        
    if (hora.horas < 10){
        inputHora.value = `Tempo 0${hora.horas}:${hora.minutos}`;
    }
        
    if (hora.minutos < 10){
        inputHora.value = `Tempo ${hora.horas}:0${hora.minutos}`;
    }

    if (totalAPagar < 10) {
        inputTotal.value = `R$: 0${totalAPagar.toFixed(2)}`;
    } else {
        inputTotal.value = `R$: ${totalAPagar.toFixed(2)}`;
    }

    const finalizar = document.getElementById('finalizar');
    finalizar.addEventListener('click', () => {
        const preco = document.getElementById('valorPagar').value
    })
}

const calculaHora = (tempoEmMilissegundos) => {
    const tempo = {
        horas: +(tempoEmMilissegundos / 3600000).toFixed(0),
        minutos: +((tempoEmMilissegundos / 60000) % 60).toFixed(0)
    }
    return tempo;
}