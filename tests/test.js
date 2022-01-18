const frisby = require('frisby');
const Joi = frisby.Joi;

it ('GET questions should return a status of 200', function () {
  return frisby
    .get('http://localhost:3000/qa/questions?product_id=70460&count=3&page=1')
    .expect('status', 200)
});

it ('GET answers should return a status of 200', function () {
  return frisby
    .get(`http://localhost:3000/qa/questions/247762/answers?count=2&page=1`)
    .expect('status', 200);
});

it ('POST question should return a status of 201 Created', function () {
  return frisby
    .post('http://localhost:3000/qa/questions', {
      body: {
        "id": 3518967,
        "product_id": 70460,
        "body": "hello can you help me?",
        "date_written": "0",
        "asker_name": "avona",
        "asker_email": "aaa@gmail.com",
        "reported": false,
        "helpful": 0,
        "date": null,
        "answers": []
    }

    })
    .expect('status', 201);
});