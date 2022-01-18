const db = require('../model');

const getQuestionsWithAnswers = (product_id, count, page, cb) => {
 return db.getQuestionsList(product_id, count, page)
  .then((questions) => {
    var questionIds = questions.rows.map(question => question.id)
    return db.getAnswersListByIds(questionIds, count, page)
              .then(answers => {
                questions.rows.map(question => {
                  var filteredAnswers = answers.rows.filter(answer => answer.question_id === question.id);
                  var filteredAnswersConverted = filteredAnswers.map(answer => {
                    var result = {}
                    result[answer.id] = {answer};
                    return result
                  })
                  question['answers'] = filteredAnswersConverted;
                })
                cb(questions.rows)
              })
  })
  .catch((err) => console.error(err.stack));
}
//fix console logs
const postAnswerWithPhotos = ({question_id, body, answerer_name, answerer_email, photos}) => {
  if (photos.length) {
    return db.createAnswerWithPhoto(question_id, body, answerer_name, answerer_email, photos)
    .then(data => {
      console.log(data.body)
    })
  }
  return db.createAnswer(question_id, body, answerer_name, answerer_email)
  .then(data => {
    console.log(data.body)
  })
}


module.exports = {
  getQuestionsWithAnswers,
  postAnswerWithPhotos
}