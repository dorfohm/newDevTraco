import { service } from "../service/index.js";
import { view } from "../view/index.js";

view.getCheckInHtml();

let idCheckIn = [];

service.getActivities().then((dados) => {
    dados.forEach(element => {
        if (element.id != null){
           idCheckIn.push(element.vehicle_id); 
        }
        
    });
    getVeiculo()
});

let arrayVeiculos = [];
const getVeiculo = () => {
    service.getVeiculo().then((dados) => {
        dados.forEach((element) => {
            if(idCheckIn.includes(element.id)) {
                criarNovaLinha(element)
            }
            if(element.label != null){
                arrayVeiculos.push(element)
            }
        })
        criarAsOpcoes(arrayVeiculos)
    })
}

const criarNovaLinha = (object) => {
    const table = document.getElementById('tbody')
    const NovaLinha = document.createElement('tr')
    const dadosHtml = `
        <td>${object.model}</td>
        <td>${object.label}</td>
        <td>
            <a id="${object.id}" class = "btn-link">CheckOut</a>
        </td>
        `
    NovaLinha.innerHTML = dadosHtml
    return table.appendChild(NovaLinha)
}

const criarAsOpcoes = (arrayVeiculos) => {
    const veiculosFiltrados = []
    arrayVeiculos.forEach((element) => {
        idCheckIn.includes(element.id) ? 
        console.log("Já está estacionado") : 
        veiculosFiltrados.push(element)
    })
    const select = document.getElementById('select');
    veiculosFiltrados.forEach((element) => {
        const option = new Option(element.label, element.id);
        select.add(option);
    })
}

const main = document.getElementById('root')

main.addEventListener('click', (event) => {
    const button = event.path[0].innerText
    const id = event.path[0].id
    if(button == 'CheckOut'){
        
    }
    if(button == 'CheckIn'){
        const select = document.getElementById('select');
        searchId(select.value)
    }
    if(button == 'Adicionar Novo'){
        
    }
})

const searchId = (id) => {
    service.getVeiculo().then((dados) => {
        dados.forEach((element) => {
            if(element.id == id) {
                checkInApi(element)
            }
        })
    })
}

const checkInApi = (objeto) => {
    service.postCheckIn(objeto.label).then((dados) => {
        alert(dados.message);
        window.location.reload();
    });
}