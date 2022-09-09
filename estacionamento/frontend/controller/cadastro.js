import { service } from "../service/index.js"
import { view } from "../view/index.js"

export const CadastroComponent = () => {
    view.getCadastroHtml();

    const formulario = document.getElementById("formulario");
    formulario.addEventListener('submit', function(event){
        event.preventDefault();

        const cadastroCliente = {
            model: document.getElementById('model').value,
            label: document.getElementById('label').value,
            type: document.getElementById('type').value,
            owner: document.getElementById('owner').value,
            observation: document.getElementById('observation').value
        }
        service.postVeiculo(cadastroCliente);
        //console.log(cadastroCliente);
    })

}