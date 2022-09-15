import { service } from "../service/index.js"
import { view } from "../view/index.js"
import { ListaClienteComponent } from "./lista-Clientes.js"

export const AtualizaComponent = (idParametro) => {
    const label = [];
    setTimeout(() => {
        service.getVeiculo().then((dados) => {
            dados.forEach(element => {
                if (element.label != null) {
                    label.push(element.label)
                }
            });
    })
    
    view.getAtualizaHtml()

    service.getVeiculo().then((dados) => {
        dados.forEach(element => {
            if(element.id == idParametro){
                console.log(element)
                adicionaParametroNoInput(element)
            }
        })
    })
    const formulario = document.getElementById("formulario");
    formulario.addEventListener('submit', function(event){
        event.preventDefault();

        const atualizaCliente = {
            model: document.getElementById('model').value,
            label: document.getElementById('label').value,
            type: document.getElementById('type').value,
            owner: document.getElementById('owner').value,
            observation: document.getElementById('observation').value
        }      
        service.putVeiculo(atualizaCliente, idParametro).then(() => {
            alert("Atualizado com sucesso");
                formulario.reset();
                ListaClienteComponent();
        })          
    })

    const cancelar = document.getElementById("cancel");
        cancelar.addEventListener('click', (event) => {
            event.preventDefault();
            formulario.reset();
            ListaClienteComponent();
        })
    }, 600)  
}

const adicionaParametroNoInput = (objeto) => {
    document.getElementById('model').value = objeto.model
    document.getElementById('label').value = objeto.label
    document.getElementById('type').value = objeto.type
    document.getElementById('owner').value = objeto.owner
    document.getElementById('observation').value = objeto.observation
}