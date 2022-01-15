const { Client, Pool } = require('pg');

const client = new Client({
  database: 'sdc',
  port: 5432,
});
client.connect()
  .then(() => { console.log('PostgreSQL connected!'); })
  .catch(e => console.error(e.stack));

module.exports.client = client;



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

const updateQuestionHelpfulness = (question_id) => {
  return client.query( `UPDATE questions SET helpful = helpful + 1 WHERE id=${question_id}`)
    .then((results) => {
      return results;
    })
    .catch((err) => console.error(err.stack));
}

const updateAnswerHelpfulness = (answer_id) => {
  return client.query( `UPDATE answers SET helpful = helpful + 1 WHERE id=${answer_id}`)
    .then((results) => {
      return results;
    })
    .catch((err) => console.error(err.stack));
}

const updateAnswersReported = (answer_id) => {
  return client.query( `UPDATE answers SET reported = true WHERE id=${answer_id}`)
  .then((results) => {
    return results;
  })
  .catch((err) => console.error(err.stack));
}

const updateQuestionsReported = (question_id) => {
  return client.query( `UPDATE questions SET reported = true WHERE id=${question_id}`)
  .then((results) => {
    return results;
  })
  .catch((err) => console.error(err.stack));
}

module.exports = {
  getQuestionsList,
  getAnswersList,
  getAnswersListByIds,
  postQuestion,
  updateQuestionHelpfulness,
  updateAnswerHelpfulness,
  updateAnswersReported,
  updateQuestionsReported
}