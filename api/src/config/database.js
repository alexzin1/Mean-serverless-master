/**
 * Arquivo: config/database.js
 * Descrição: arquivo responsável pelas 'connectionStrings' da aplicação: MongoDb & CosmosDb
 * Data: 01/08/2019
 * Author: Glaucia Lemos
 */

module.exports = {
  local:
  {
    localUrl: 'mongodb+srv://adm123:<password>@projetodb.p4hhn.mongodb.net/dbsite',
  },

  //localUrl: 'mongodb://localhost:27017/meanserverless'
  //mongodb+srv://adm123:adm123@projetodb.p4hhn.mongodb.net/dbsite.base
  /* cosmosdb:
  {
    name: 'meanserverless',
    url: 'mongodb://<cosmosdb_name>:<primary_master_key>@<cosmosdb_name>.documents.azure.com:10255/meanserverless?ssl=true',
    port: 10255,
  }, */
};
