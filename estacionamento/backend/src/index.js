import express, { response } from 'express';
import { checkIn, checkOut, deleteActivity, listActivities } from './controllers/activitiesController.js';
import { deleteVehicles, insertVehicle, listVehicles, updateVehicles } from './controllers/vehiclesController.js';
import { openDatabase } from './database.js';

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");// dentro do '*' poderia ser qual site poderia fazer a requisiçao.
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
    next();
})

app.get('/api/ping', (request, response) => {
    response.send({
        message: 'pong'
    })
});

/* Endpoints Vehicles */
app.get('/api/vehicles', listVehicles);
app.post('/api/vehicles', insertVehicle);
app.put('/api/vehicles/:id', updateVehicles);
app.delete('/api/vehicles/:id', deleteVehicles);

//Endpoints de activities
app.post('/api/activities/checkin', checkIn);
app.put('/api/activities/checkout', checkOut);
app.delete('/api/activities/:id', deleteActivity);
app.get('/api/activities', listActivities);

app.listen(8000, () => {
    console.log("Servidor rodando na porta 8000");
});