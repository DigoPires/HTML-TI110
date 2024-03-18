//fazendo a requisição com o banco de dados
const db = require('./db')

//criando a nova tabela
const postTabela = db.sequelize2.define('postagens', {
    titulo : {
        type: db.sequelize.STRING
    },
    conteudo: {
        type: db.sequelize.TEXT
    }
})

//Exportando a minha tabela
module.exports = postTabela


//postTabela.sync({force: true})

// //Testando sucesso ou erro
// .then(() => {
//      console.log("Tabela criada com sucesso!")
// })
// .catch((error)=> {
//     console.error("errp ao criar a tabela", error)
// })