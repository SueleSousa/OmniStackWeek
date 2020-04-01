

/** 
 * Rota & Recurso 
 * */

 /** Métodos HTTP:
  * 
  * GET: Buscar uma informação Beck-End
  * POST : Criar informação no beck-end
  * PUT: Alterar informação no beck-end
  * DELETE: Deletar uma informação no beck-end 
  */

 /**
  * Tipos de Parâmetros
  * 
  * Query Params: Parâmetros nomeados enviados após o "?" (Filtros, paginação) posso identar vários com &
  * Route Params: Parâmetros u
  * tilizados para identificar recursos, por exemplo trazer apenas o id 1
  * Request Body: Corpo de requisição (nome, idade, senha, etc), ou seja, cria ou altera recursos
 */

 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoBD, CounchDB, etc
  */

  /**
   * Driver: SELECT * FROM users 
   * Query Builder : table('users').select('*').where()
   */

const express = require ('express');
const routes = require('./routes');
const cors = require('cors'); 
const app = express ();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);










