drop database db_siteClientes;

create database db_siteClientes;

use db_siteClientes;

create table tb_FormularioCadastro(
    nomeCompleto varchar(100) not null,
    email varchar(50) unique not null,
    senha varchar(30) not null,
    telefone int(11) not null,
    genero varchar(20) not null,
    dataNasc date not null,
    endereco varchar(100) not null,
    cidade varchar(50) not null,
    estado varchar(50) not null
);