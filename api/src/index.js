import express from 'express';
const app = express();

const customers = [
    {id: 1, name: 'Marcos Vinicius'},
    {id: 2, name: 'Maria Eduarda'},
    {id: 3, name: 'José Francisco'}
];

app.get('/api/ping', (request, response) => {
    response.send({
        message: "pong"
    })
});

app.get('/api/customers', (request, response) => {
    response.send(customers);
});

app.listen(8000, () => {
    console.log("Servidor funcionando na porta 8000... ")
});