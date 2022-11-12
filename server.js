//lado do servidor
const express = require('express') //função retornada pelo require
const app = express() //método construtor do codigo acima para instanciar uma aplicação 

app.use(express.static('public'))

const http = require('http').Server(app)// retorna um modulo http que contem algumas classes que no caso esta sendo ultilizado o server que retornará uma conexão http
const serverSocket = require('socket.io')(http)

const PORTA = 8000

http.listen(PORTA, function (){
    console.log('Servidor iniciado. Abra o navegador em http://localhost:' + PORTA);
})

app.get('/', function(req, resp){
    resp.sendFile(__dirname + '/index.html')
})

serverSocket.on('connection', function (socket){
    console.log('Cliente conectado: ' + socket.id)

    socket.on('chat msg', function (msg){
        console.log(`Msg recebida de ${socket.id}: ${msg}`)

    })
})