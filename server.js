//lado do servidor
const express = require('express') //função retornada pelo require
const app = express() //método construtor do codigo acima para instanciar uma aplicação 

const http = require('http').Server(app)// retorna um modulo http que contem algumas classes que no caso esta sendo ultilizado o server que retornará uma conexão http
const serverSocket = require('socket.io')(http)

const PORTA = 8000

http.listen(PORTA, function (){
    console.log('Servidor iniciado. Abra o navegador em http://localhost:' + PORTA);
})