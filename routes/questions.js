const express = require('express');
const router = express.Router();
const db = require('../model');
const helper = require('../helpers');

router.route('/')
.get((req, res) => {
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
.post((req, res) => {
  db.createQuestion(req.body)
  .then((data) => {
    res.status(201).send()
    console.log("body", req.body)
  })
  .catch(err => res.status(500).send(err))
})


router.route('/:question_id/answers')
.get((req, res) => {
  var question_id = req.params.question_id;
  var count = req.query.count;
  var page = req.query.count;

  db.getAnswersList(question_id, count, page)
  .then((result) => {
    res.status(200).send(result.rows);
  })
})
.post((req, res) => {
  console.log(req.body)
  helper.postAnswerWithPhotos(req.body)
  .then((data) => {
    res.status(201).send()
  })
  .catch(err => res.status(500).send(err))

})

router.route('/:question_id/helpful')
.put((req, res) => {
  db.updateQuestionHelpfulness(req.body)
  .then((data) => {
    res.status(204).send(data);
  })
  .catch(err => res.status(500).send(err))
})

router.route('/:question_id/report')
.put((req, res) => {
  db.updateQuestionsReported(req.params.question_id)
  .then((data) => {
    res.status(204).send(data)
  })
  .catch(err => res.status(500).send(err))
})


module.exports = router;