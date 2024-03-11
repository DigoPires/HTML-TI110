const sequelize = require('sequelize');

const sequelize2 = new sequelize('db_testeNode', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

// sequelize2.authenticate().then(function(){
//     console.log("Conectado com sucesso!");
// }).catch(function(erro){
//     console.log("Falha ao se conectar " + erro);
// });

const postagem = sequelize2.define('postagens',{
    titulo:{
        type: sequelize.STRING
    },
    conteudo:{
        type:sequelize.TEXT
    }
});

// Executando a criação da tabela, só precisa ser feito uma vez
// postagem.sync({force:true});

// Passando dados para a tabela

// postagem.create({
//     titulo: "Promoção dia das mães",
//     conteudo: "No mês do dia das mães todas as lojas terão 50% de desconto nos esmaltes"
// });

const usuario = sequelize2.define('usuario',{
    nome: {
        type: sequelize.STRING
    },
    sobrenome:{
        type: sequelize.STRING
    },
    idade: {
        type: sequelize.INTEGER
    },
    email: {
        type: sequelize.STRING
    }
});

// usuario.sync({force:true});

usuario.create({
    nome: "Rodrigo",
    sobrenome: "Pires",
    idade: "17",
    email: "rodrigo_pires2806@outlook.com"
});