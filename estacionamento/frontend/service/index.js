const url = "http://localhost:8000/api"

//POST
const postVeiculo = (objetoCliente) => {
    console.log("ObjetoCliente: ", JSON.stringify(objetoCliente))
    return fetch(url + "/vehicles", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(objetoCliente)    
    }) .then((response) => {
        if(response.status != 200){
            console.log(`Erro no servidor" ${response.status}`);
        } else {
            alert(`Sucesso ao salvar: ${response.status}`)
        }        
    })
}

//GET
const getVeiculo = () => {
    return fetch(url + "/vehicles")
    .then((response) => {
        if(response.status != 200){
            console.log(`Erro no servidor" ${response.status}`);
        } else {
            return response.json()
        }        
    })   
}

//Export
export const service = {
    postVeiculo,
    getVeiculo
}