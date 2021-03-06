
// const { Client } = require('pg');
// // const { getAlerts } = require('./alerts.js');
// const request = require('supertest');
// const app = require("../server.js");


const frisby = require('frisby');
const Joi = frisby.Joi;

let randomQuestionId = Math.floor(Math.random() * 3518967) + 1;
let randomAnswerId = Math.floor(Math.random() * 6879329) + 1;

function getRandomId() {
  return Math.floor(Math.random() * 1000011) + 1;
}

it ('GET questions should return a status of 200 OK', function () {
  let randomId = getRandomId();

  return frisby
    .get(`http://localhost:3000/qa/questions?product_id=${randomId}`)
    .expect('status', 200);
});

it ('GET answers should return a status of 200 OK', function () {
  return frisby
    .get(`http://localhost:3000/qa/questions/${randomAnswerId}/answers?count=2&page=1`)
    .expect('status', 200)
});

it ('POST answer should return a status of 201 CREATED', function () {
  return frisby
    .post(`http://localhost:3000/qa/questions/${randomAnswerId}/answers?count=1&page=2`, {
      body: {
          "question_id": 247762,
          "body": "i did not like it",
          "asker_name": "avona",
          "asker_email": "aaa@gmail.com",
    }

    })
    .expect('status', 201);
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


// jest.mock('pg', () => {
//   const mClient = {
//     connect: jest.fn(),
//     query: jest.fn(),
//     end: jest.fn(),
//   };
//   return { Client: jest.fn(() => mClient) };
// });

// const Joi = frisby.Joi;


// describe('basic test with mock', () => {
//   let client;
//   beforeEach(() => {
//     client = new Client();
//     client.connect.mockResolvedValueOnce({ });
//   });
//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   // it('should generate correct answer sql query', async () => {
  //   client.query.mockResolvedValueOnce({ rows: [], rowCount: 0 });
  //   await getAlerts();
  //   expect(client.connect).toBeCalledTimes(1);
  //   expect(client.query).toBeCalledWith('SELECT * FROM public.alerts;');
  //   expect(client.end).toBeCalledTimes(1);
  //   // expect(success).toBeCalledWith({ message: '0 item(s) returned', data: [], status: true });
  // });


  // it('should success', async () => {
  //   client.query.mockResolvedValueOnce({ rows: [], rowCount: 0 });
  //   await getAlerts();
  //   expect(client.connect).toBeCalledTimes(1);
  //   expect(client.query).toBeCalledWith('SELECT * FROM public.alerts;');
  //   expect(client.end).toBeCalledTimes(1);
  //   // expect(success).toBeCalledWith({ message: '0 item(s) returned', data: [], status: true });
  // });

  // it('should failure', async () => {
  //   const mError = new Error('dead lock');
  //   client.query.mockRejectedValueOnce(mError);
  //   await getAlerts();
  //   expect(client.connect).toBeCalledTimes(1);
  //   expect(client.query).toBeCalledWith('SELECT * FROM public.alerts;');
  //   expect(client.end).toBeCalledTimes(1);
  //   // expect(failure).toBeCalledWith({ message: mError, status: false });
  // });

  // it('tests /qa/questions endpoint', async() => {

  //   client.query.mockResolvedValueOnce({ });
  //   const response = await request(app).post("/qa/questions");
  //   // expect(response.body).toEqual(["Mars", "Moon", "Earth", "Mercury", "Venus", "Jupiter"]);
  //   // expect(response.body).toHaveLength(6);
  //   expect(response.statusCode).toBe(201);
  //   // Testing a single element in the array
  //   // expect(response.body).toEqual(expect.arrayContaining(['Earth']));

  // });

  // it ('POST question should return a status of 201 Created', function () {



    // return frisby
    //   .post('http://localhost:3000/qa/questions', {
    //     body: {
    //       "id": 3518967,
    //       "product_id": 70460,
    //       "body": "Is it silk?",
    //       "asker_name": "anna",
    //       "asker_email": "aaa@gmail.com",
    //       "reported": false,
    //       "helpful": 0,
    //       "date": null,
    //       "answers": []
    //   }

      // })
      // .expect('status', 201);
  // });
// });




// let randomQuestionId = Math.floor(Math.random() * 3518967) + 1;
// let randomAnswerId = Math.floor(Math.random() * 6879329) + 1;

// it ('GET questions expected to return a status code of 200', function () {


//   return frisby
//     .get(`http://localhost:3000/qa/questions?product_id=${randomQuestionId}`)
//     .expect('status', 200)
// });

// it ('GET answers expected to return a status code of 200', function () {
//   return frisby
//     .get(`http://localhost:3000/qa/questions/${randomAnswerId}/answers?count=2&page=1`)
//     .expect('status', 200);
// });

