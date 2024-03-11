var express = require('express');
const port = 8081;

const app = express();

// Chamando a biblioteca Handlebars
const handlebars = require('express-handlebars');

const sequelize = require('sequelize');

const sequelize2 = new sequelize('db_testeNode', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

// Configurando Handlebars
app.engine('handlebars', handlebars.engine({defaultLayout:'main'}));
app.set('view.engine, handlebars');

// Criar Rota
app.get('/cad', function(req, res){
    res.render('formulario.handlebars');
});

// Nova rota
app.post('/add', function(req, res){
    res.send('Formulario recebido!');
});


// app.get("/", function(req, res){
//     res.sendFile(__dirname + "/HTML/index.html");
// });

// app.get("/sobre", function(req, res){
//     res.sendFile(__dirname + "/HTML/sobre.html");
// });

// app.get("/ola/:nome/:cargo/:idade", function(req, res){
//     res.send("<h1>Ola " + req.params.nome + "</h1>" + 
//     "<br><h2> Seu cargo é: " + req.params.cargo + 
//     "<br>Sua idade é: " + req.params.idade + "</h2>");
// });

app.listen(port, function(){
    console.log("Servidor Funcionando: http://localhost:8081");
});