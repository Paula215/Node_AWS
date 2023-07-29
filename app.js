const express = require('express');
const http = require('http');
const helment = require('helmet');
var compression = require('compression');
require('dotenv').config();
const {v4: uuidv4} = require('uuid');

const app = express();//crea la aplicacion
app.use(helment());//protege la aplicacion
app.use(compression());//comprime las respuestas

const serverHttp= http.createServer(app);//crea el servidor http
serverHttp.listen(process.env.HTTP_PORT, process.env.IP);//inicia el servidor http

app.use(express.static('./public'));//servir archivos estaticos

app.get('/api/get-uuid',function(req,res){
    res.send(uuidv4());
});

app.get('*',function(req,res){
    res.status(404).send('Not Found');
});