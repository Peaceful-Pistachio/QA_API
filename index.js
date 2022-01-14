const express = require('express')
const app = express()
const port = 3000;
const db = require('./database_postgreSQL');
const helper = require('./helpers');

app.use(express.json());

//List Questions -> GET /qa/questions
app.get('/qa/questions', (req, res) => {
  var product_id = req.query.product_id;
  var count = req.query.count;
  var page = req.query.count;

  helper.getQuestionsWithAnswers(product_id, count, page)

//  db.getQuestionsList(product_id, count, page)
//  .then((result) => {
//    //res.status(200).send(result);
//    console.log(result.rows)
//    console.log("Questions list succesfully sent!")
//  })
//  .catch((err) => {
//    console.log(err)
//  })
  res.send('Hello World!')
})

//Answers List -> GET /qa/questions/:question_id/answers
app.get('/qa/questions/:question_id/answers', (req, res) => {
  var question_id = req.params.question_id;
  var count = req.query.count;
  var page = req.query.count;

  db.getAnswersList(question_id, count, page)
  .then((result) => {
    console.log("result:", result.rows);
    //res.status(200).send(result);
   console.log("Answers list succesfully sent!")
  })
  
})

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})