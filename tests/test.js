const frisby = require('frisby');
const Joi = frisby.Joi;

let randomQuestionId = Math.floor(Math.random() * 3518967) + 1;
let randomAnswerId = Math.floor(Math.random() * 6879329) + 1;

it ('GET questions expected to return a status code of 200', function () {
  return frisby
    .get(`http://localhost:3000/qa/questions?product_id=${randomQuestionId}`)
    .expect('status', 200)
});

it ('GET answers expected to return a status code of 200', function () {
  return frisby
    .get(`http://localhost:3000/qa/questions/${randomAnswerId}/answers?count=2&page=1`)
    .expect('status', 200);
});

it ('POST question should return a status of 201 Created', function () {
  return frisby
    .post('http://localhost:3000/qa/questions', {
      body: {
        "id": 3518967,
        "product_id": 70460,
        "body": "Is it silk?",
        "asker_name": "anna",
        "asker_email": "aaa@gmail.com",
        "reported": false,
        "helpful": 0,
        "date": null,
        "answers": []
    }

    })
    .expect('status', 201);
});