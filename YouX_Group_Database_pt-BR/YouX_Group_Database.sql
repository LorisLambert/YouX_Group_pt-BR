CREATE DATABASE youxgroup_system;
USE youxgroup_system;

CREATE TABLE usuarios
(
	id int unsigned not null auto_increment,
    nome varchar(150) not null,
    cpf varchar(100) not null,
    senha varchar(150) not null,
    cargo boolean,
    PRIMARY KEY (id)
);

CREATE TABLE pacientes
(
	id int unsigned not null auto_increment,
    nome varchar(150) not null,
    cpf varchar(100) not null,
    datanascimento varchar(100) not null,
    altura varchar(50) not null default '',
    peso varchar(50) not null default '',
    uf varchar (10) not null default '',
    PRIMARY KEY (id)
);

/* Contando quantas pessoas estão num mesmo UF 
SELECT COUNT(DISTINCT id_uf) FROM pacientes; 
*/

/* Criptografia das senhas com o MD5 nativo do MySQL 
INSERT INTO usuarios (nome, cpf, senha, cargo) VALUES (usuario_nome, usuario_cpf, MD5(usuario_senha), usuario_cargo);
*/

/* Rascunho da criptografia dos CPFs com o AES nativo do MySQL 
INSERT INTO usuarios (nome, cpf, senha, cargo) VALUES (usuario_nome, AES_ENCRYPT(usuario_cpf, 'chave'), usuario_senha, usuario_cargo);
INSERT INTO pacientes (nome, cpf, data_nascimento, altura, peso, uf) VALUES (paciente_nome, AES_ENCRYPT(paciente_cpf, 'chave'), paciente_datanacimento, paciente_altura, paciente_peso, paciente_uf );
*/

/* Rascunho da descriptografia dos CPFs com o AES nativo do MySQL
SELECT cpf, CAST(AES_DECRYPT(usuario_cpf,'Chave_para_descriptografar') as varchar) FROM pacientes WHERE id ='usuario_id';
SELECT cpf, CAST(AES_DECRYPT(paciente_cpf,'Chave_para_descriptografar') as varchar) FROM usuarios WHERE id ='paciente_id';
*/