import express from 'express';
const app = express();

app.get('/api/ping', (request, response) => {
    response.send({
        message: "pong"
    })
})

app.listen(8000, () => {
    console.log("Servidor funcionando na porta 8000... ")
})