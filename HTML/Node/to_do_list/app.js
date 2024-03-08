// "npm i" para instalar a pasta node_modules novamente

const express = require('express');
const port = 3000;
const app = express();
const taskRouter = require('./routes/taskRouters')

app.use(express.json());

app.use('/tarefa', taskRouter);

app.listen(port, () => {
    console.log("Servidor rodando na porta: " + port);
});

app.get('/', (req, res) => {
    res.send("Testando API!");
});

/*
select --> get
insert --> post
update --> put / patch 
delete --> delete

CRUD
*/ 