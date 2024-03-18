var express = require('express');
const port = 8081;

const app = express();

// Chamando a biblioteca Handlebars
const handlebars = require('express-handlebars');

const bodyParser = require('body-parser');

const post = require('./post');

// Configurando Handlebars
app.engine('handlebars', handlebars.engine({defaultLayout: 'main',  runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true  
}}));
app.set('view.engine, handlebars');

//configurando body-parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Criar Rota
app.get('/cad', function(req, res){
    res.render('formulario.handlebars');
});

//rota para a home
app.get('/', function(req, res){
    post.findAll().then(function(posts){// find all pega tudo que esta no banco
        res.render('home.handlebars', {posts: posts});
    });
});

//  Uma nova rota post
app.post('/add', function(req, res){
    post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    })
    .then(function(){

        res.redirect('/')
    })
    .catch(function(erro){
        res.send("Houve um erro:" + erro)
    })
});

// Criando a rota para deletar
app.get('/deletar/:id', function(req, res){
    post.destroy({where: {'id': req.params.id}}).then(function(){
        res.send("Postagem deletada");
    }).catch(function(erro){
        res.send("Essa postagem não existe");
    });
});

app.listen(port, function(){
    console.log("Servidor Funcionando: http://localhost:8081");
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