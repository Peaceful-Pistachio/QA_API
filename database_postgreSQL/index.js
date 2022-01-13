const postgres = require('postgres');
const sql = postgres('postgres://annasarafanova:password@localhost:5432/sdc')

//test query
const getTestAnswer = () => {
  return (sql`select * from questions limit 1`)
}

//List Questions


module.exports = {
  getTestAnswer
}