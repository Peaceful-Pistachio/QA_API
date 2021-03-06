const pool = require('./db_connection.js')

//List Questions -> GET /qa/questions
//TODO MOCK it for tests
const getQuestionsList = (product_id, count, page) => {
  let offset = (page - 1) * count;
  let sqlQuery = `SELECT * FROM questions
  WHERE product_id=${product_id} AND reported=false
  ORDER BY helpful DESC
  LIMIT ${count}
  OFFSET ${offset}`

  return (pool.query(sqlQuery))
}

//Answers List -> GET /qa/questions/:question_id/answers
 const getAnswersList = (question_id, page, count) => {
  let offset = (page - 1) * count;

  return (pool.query(`SELECT *
  FROM answers
  WHERE question_id=${question_id} AND reported=false
  ORDER BY helpful DESC
  LIMIT ${count}
  OFFSET ${offset}
  `))

 }

 const getAnswersListByIds = (question_ids, page, count) => {
  let sqlQueries = question_ids.map(questionId =>
    `SELECT subq.id, subq.question_id, subq.body, subq.date, subq.answerer_name, subq.helpful AS helpfulness, array_agg(p.url) AS photos
    FROM
      (SELECT *
      FROM answers a
      WHERE question_id=${questionId}
      ORDER BY helpful DESC
      LIMIT 5) subq
    LEFT JOIN photos p on subq.id = p.answer_id
    GROUP BY subq.id, subq.question_id, subq.body, subq.date, subq.answerer_name, subq.helpful`

  )

  let sqlQueryFinal = sqlQueries.join(" UNION ALL ")

  return (pool.query(sqlQueryFinal))
}

//it works but maybe need to refactor fields
const createQuestion = (product_id, body, asker_name, asker_email, reported, helpful) => {
 let sqlQuery = `INSERT INTO questions(product_id, body, asker_name, asker_email)
    VALUES(${product_id}, '${body}', '${asker_name}', '${asker_email}')`

    return pool.query(sqlQuery)
      .then((results) => {
        return results;
     })
    .catch((err) => console.error(err.stack));
}

const createAnswer = (question_id, body, answerer_name, answerer_email) => {
  let sqlQuery = `INSERT INTO answers(question_id, body, answerer_name, answerer_email)
  VALUES(${question_id}, '${body}', '${answerer_name}', '${answerer_email}')`

  return pool.query(sqlQuery)
  .then((results) => {
    return results
 })
.catch((err) => console.error(err.stack));
}

//https://stackoverflow.com/questions/21764939/postgresql-insert-into-multiple-tables-using-foreign-key-from-first-insertion-i
const createAnswerWithPhoto = (question_id, body, answerer_name, answerer_email, photos) => {
  console.log("photos:  ",photos);
  let photosToInsert = photos.map(url => (
    `((SELECT answer_id FROM result), '${url}')`
  ))
  let sqlQueryFinal = photosToInsert.join(',');

  let sqlQuery =`BEGIN;
  WITH result AS (
    INSERT INTO answers(question_id, body, answerer_name, answerer_email)
    VALUES(${question_id}, '${body}', '${answerer_name}', '${answerer_email}')
    RETURNING id AS answer_id
  )
  INSERT INTO photos (answer_id, url)
    VALUES
    ${sqlQueryFinal};
  COMMIT;
  `
  return pool.query(sqlQuery)
    .then((results) => {
      return results;
    })
    .catch((err) => console.error(err.stack));

}

const updateQuestionHelpfulness = (question_id) => {
  return pool.query( `UPDATE questions SET helpful = helpful + 1 WHERE id=${question_id}`)
    .then((results) => {
      return results;
    })
    .catch((err) => console.error(err.stack));
}

const updateAnswerHelpfulness = (answer_id) => {
  return pool.query( `UPDATE answers SET helpful = helpful + 1 WHERE id=${answer_id}`)
    .then((results) => {
      return results;
    })
    .catch((err) => console.error(err.stack));
}

const updateAnswersReported = (answer_id) => {
  return pool.query( `UPDATE answers SET reported = true WHERE id=${answer_id}`)
  .then((results) => {
    return results;
  })
  .catch((err) => console.error(err.stack));
}

const updateQuestionsReported = (question_id) => {
  return pool.query( `UPDATE questions SET reported = true WHERE id=${question_id}`)
  .then((results) => {
    return results;
  })
  .catch((err) => console.error(err.stack));
}

module.exports = {
  getQuestionsList,
  getAnswersList,
  getAnswersListByIds,
  createQuestion,
  createAnswer,
  createAnswerWithPhoto,
  updateQuestionHelpfulness,
  updateAnswerHelpfulness,
  updateAnswersReported,
  updateQuestionsReported
}