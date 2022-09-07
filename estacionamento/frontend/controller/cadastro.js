import { postVeiculo } from "../service/index.js";

const formulario = document.getElementById("formulario");
formulario.addEventListener('submit', function(event){
    event.preventDefault();
    console.log(event);

    const cadastroCliente = {
        model: document.getElementById('model').value,
        label: document.getElementById('label').value,
        type: document.getElementById('type').value,
        owner: document.getElementById('owner').value,
        observation: document.getElementById('observation').value
    }
    postVeiculo(cadastroCliente);
    //console.log(cadastroCliente);
})