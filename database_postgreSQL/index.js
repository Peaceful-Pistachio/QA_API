const { Client, Pool } = require('pg');

const client = new Client({
  database: 'sdc',
  port: 5432,
});
client.connect()
  .then(() => { console.log('PostgreSQL connected!'); })
  .catch(e => console.error(e.stack));

module.exports.client = client;



//Refactor: use pages, join answers
//List Questions -> GET /qa/questions
const getQuestionsList = (product_id, count, page) => {
  return (client.query(`SELECT * FROM questions
  WHERE product_id=${product_id}
  ORDER BY helpful DESC
  LIMIT ${count}
  OFFSET ${page}
  `))
}

//Answers List -> GET /qa/questions/:question_id/answers
 const getAnswersList = (question_id, page, count) => {
  return (client.query(`SELECT *
  FROM answers
  WHERE question_id=${question_id}
  ORDER BY helpful DESC
  LIMIT ${count}
  `))
 }

 const getAnswersListByIds = (question_ids, page, count) => {
  var sqlQueries = question_ids.map(questionId =>
    `(SELECT *
      FROM answers
      WHERE question_id=${questionId}
      ORDER BY helpful DESC
      LIMIT ${count})
    `
  )

  var sqlQueryFinal = sqlQueries.join(" UNION ALL ")

  return (client.query(sqlQueryFinal))
}

const postQuestion = () => {

}

module.exports = {
  getQuestionsList,
  getAnswersList,
  getAnswersListByIds,
  postQuestion
}