const db = require('../database_postgreSQL');

const getQuestionsWithAnswers = (product_id, count, page) => {

  return db.getQuestionsList(product_id, count, page)
  .then((result) => {
    result.rows.map(item =>
      (
        db.getAnswersList(item.id, 1, 5).then(data => console.log(data.rows))
      )
    )
  })

}

const test = () => {
  console.log('helper works')
}

module.exports = {
  getQuestionsWithAnswers,
  test
}