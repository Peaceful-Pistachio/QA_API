const express = require('express');
const router = express.Router();
const db = require('../model');
const helper = require('../helpers');

router.route('/:answer_id/helpful')
.put((req, res) => {
  db.updateAnswerHelpfulness(req.params.answer_id)
  .then((data) => {
    res.status(204).send(data);
  })
  .catch(err => res.status(500).send(err))
})

router.route('/:answer_id/report')
.put((req, res) => {
  db.updateAnswersReported(req.params.answer_id)
  .then((data) => {
    res.status(204).send(data)
  })
  .catch(err => res.status(500).send(err))
})

module.exports = router;