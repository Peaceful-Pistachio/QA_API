const express = require('express');
const router = express.Router();
const db = require('../model');
const helper = require('../helpers');

router.route('/')
.get((req, res) => {
  var product_id = req.query.product_id;
  var count = req.query.count || 4;
  var page = req.query.count || 1;

  db.newGetQuestionList(product_id, count, page)
  .then((result) => {
    res.status(200).send(result.rows);
  })
  .catch(err => res.status(500).send(err));
})
.post((req, res) => {
  db.createQuestion(req.body)
  .then((data) => {
    res.status(201).send()
  })
  .catch(err => res.status(500).send(err))
})


router.route('/:question_id/answers')
.get((req, res) => {
  var question_id = req.params.question_id;
  var count = req.query.count || 2;
  var page = req.query.count || 1;

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
