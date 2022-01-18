const express = require('express')
const app = express()
const port = 3000;
const db = require('./model');
const helper = require('./helpers');
const questions = require('./routes/questions.js');
const answers = require('./routes/answers.js')

app.use(express.json());
app.use('/qa/questions', questions);
app.use('/qa/answers', answers);

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})
