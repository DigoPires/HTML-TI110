var express = require('express');

const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + "/HTML/index.html");
});

app.get("/sobre", function(req, res){
    res.sendFile(__dirname + "/HTML/sobre.html");
});

app.get("/produtos", function(req, res){
    res.send("Confira os nossos produtos");
});

app.get("/ola/:nome/:cargo/:idade", function(req, res){
    res.send("<h1>Ola " + req.params.nome + "</h1>" + 
    "<br><h2> Seu cargo é: " + req.params.cargo + 
    "<br>Sua idade é: " + req.params.idade + "</h2>");
});

app.listen(8081, function(){
    console.log("Servidor Funcionando: http://localhost:8081");
});