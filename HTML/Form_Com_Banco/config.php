<?php
    $dbHost = 'Localhost'; // Endereço do servidor do banco de dados
    $dbUsername = 'root'; // Nome de usuário do banco de dados
    $dbPassword = ''; // Senha do banco de dados
    $dbName = 'db_siteClientes'; // Nome do banco de dados a ser utilizado

    $conexao = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName); // Conexão com o banco de dados

    // Verificação da conexão
    if ($conexao->connect_errno){
        echo "Erro!"; // Se houver um erro de conexão, exibirá uma mensagem de erro
    }
    else{
        echo "Conexão efetutada com sucesso!"; // Se a conexão for bem-sucedida, exibirá uma mensagem de sucesso
    }
?>