const express = require('express')
const app = express()
const port = 3000;
var router = express.Router()
const db = require('./model');
const helper = require('./helpers');
const controller = require('./controller')

app.use(express.json());

//List Questions -> GET /qa/questions
app.get('/qa/questions', (req, res) => {
  var product_id = req.query.product_id;
  var count = req.query.count;
  var page = req.query.count;

  helper.getQuestionsWithAnswers(product_id, count, page, (data) => {
    //todo: default values for count and page, review math calculation
    if(!data) {
      res.status(404).send("Question could not be found")
    } else {
      res.status(200).send(data)
    }
  })
})

//Answers List -> GET /qa/questions/:question_id/answers
app.get('/qa/questions/:question_id/answers', (req, res) => {
  var question_id = req.params.question_id;
  var count = req.query.count;
  var page = req.query.count;

  db.getAnswersList(question_id, count, page)
  .then((result) => {
    res.status(200).send(result.rows);
  })
})

app.post('/qa/questions', (req, res) => {
  db.createQuestion(req.body)
  .then((data) => {
    res.status(201).send()
    console.log("body", req.body)
  })
  .catch(err => res.status(500).send(err))
})

app.post('/qa/questions/:question_id/answers', (req, res) => {
  db.postAnswer(req.body)
  .then((data) => {
    res.status(201).send(data)
    console.log(data)
  })
  .catch(err => res.status(500).send(err))
})

app.put('/qa/questions/:question_id/helpful', (req, res) => {
  db.updateQuestionHelpfulness(req.params.question_id)
  .then((data) => {
    res.status(204).send(data);
  })
  .catch(err => res.status(500).send(err))
})

app.put('/qa/answers/:answer_id/helpful', (req, res) => {
  db.updateAnswerHelpfulness(req.params.answer_id)
  .then((data) => {
    res.status(204).send(data);
  })
  .catch(err => res.status(500).send(err))
})


app.put('/qa/answers/:answer_id/report', (req, res) => {
  db.updateAnswersReported(req.params.answer_id)
  .then((data) => {
    res.status(204).send(data)
  })
  .catch(err => res.status(500).send(err))
})

app.put('/qa/questions/:question_id/report', (req, res) => {
  db.updateQuestionsReported(req.params.question_id)
  .then((data) => {
    res.status(204).send(data)
  })
  .catch(err => res.status(500).send(err))
})


app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})