# QA_API

SDC - System Design Capstone

The backend server and database for a multiple component application.

Technologies used:
- Node.js
- Express
- Postgres
- Frisby
- Jest
- k6
- Loader.io
- New Relic
- NGINX
- PGTune

Installation:
- run 'npm install' to install dependencies.
- run 'npm run start' to start the server.
- Navigate to localhost:3000

Endpoints:

-GET /qa/questions/
```
[
    {
        "product_id": 1,
        "results": [
            {
                "question_id": 4,
                "question_body": "How long does it last?",
                "asker_name": "funnygirl",
                "asker_email": "first.last@gmail.com",
                "helpful": 6,
                "reported": false,
                "date": "2020-07-09T17:35:17.01",
                "answers": {
                    "65": {
                        "id": 65,
                        "body": "It runs small",
                        "date": "2020-11-19T03:11:47.205",
                        "answerer_name": "dschulman",
                        "helpful": 1,
                        "photos": [
                            "https://images.unsplash.com/photo-1531889947080-bc5693ae9fa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"
                        ]
                    },
                    "89": {
                        "id": 89,
                        "body": "Showing no wear after a few months!",
                        "date": "2020-09-02T16:33:29.53",
                        "answerer_name": "sillyguy",
                        "helpful": 8,
                        "photos": [
                            "https://images.unsplash.com/photo-1562542082-519ebcdb43e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2057&q=80"
                        ]
                    }
                }
            },
            {
                "question_id": 1,
                "question_body": "What fabric is the top made of?",
                "asker_name": "yankeelover",
                "asker_email": "first.last@gmail.com",
                "helpful": 1,
                "reported": false,
                "date": "2020-07-27T14:18:34.409",
                "answers": {
                    "5": {
                        "id": 5,
                        "body": "Something pretty soft but I can't be sure",
                        "date": "2020-09-13T02:49:20.555",
                        "answerer_name": "metslover",
                        "helpful": 5,
                        "photos": [
                            "https://images.unsplash.com/photo-1421780791481-c5fb9d369db7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                        ]
                    },
                    "7": {
                        "id": 7,
                        "body": "Its the best! Seriously magic fabric",
                        "date": "2021-02-27T10:45:24.662",
                        "answerer_name": "metslover",
                        "helpful": 7,
                        "photos": [
                            "https://images.unsplash.com/photo-1510551310160-589462daf284?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1649&q=80"
                        ]
                    },
                    "8": {
                        "id": 8,
                        "body": "DONT BUY IT! It's bad for the environment",
                        "date": "2020-09-19T14:49:22.548",
                        "answerer_name": "metslover",
                        "helpful": 8,
                        "photos": [
                            "https://images.unsplash.com/photo-1469504512102-900f29606341?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                        ]
                    },
                    "57": {
                        "id": 57,
                        "body": "Suede",
                        "date": "2021-04-11T09:51:31.495",
                        "answerer_name": "metslover",
                        "helpful": 7,
                        "photos": [
                            "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
                        ]
                    },
                    "95": {
                        "id": 95,
                        "body": "Supposedly suede, but I think its synthetic",
                        "date": "2020-09-14T14:53:52.219",
                        "answerer_name": "metslover",
                        "helpful": 3,
                        "photos": [
                            "https://images.unsplash.com/photo-1426647451887-5f2be01918a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                        ]
                    }
                }
            }
        ]
    }
]
```

- GET /qa/questions/:question_id/answers
```
[
    {
        "id": 483669,
        "question_id": 247767,
        "body": "Consectetur a et et ex.",
        "answerer_name": "Keyshawn62",
        "answerer_email": "Lelia.Stroman@yahoo.com",
        "reported": false,
        "helpful": 1,
        "date": "2022-01-20T03:38:53.639Z"
    }
]
```

