const express = require('express')
const app = express()
const port = 3000;
const db = require('./database_postgreSQL');

app.get('/', (req, res) => {
 db.getTestAnswer()
 .then((result) => console.log("result:", result));
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})