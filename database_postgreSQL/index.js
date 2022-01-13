const postgres = require('postgres');
const sql = postgres('postgres://annasarafanova:password@localhost:5432/sdc')

const getTestAnswer = () => {
  return (sql`select * from questions limit 1`)
}

module.exports = {
  getTestAnswer
}