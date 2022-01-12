const mongoose = require('mongoose');


const questionsSchema= new.mongoose.Schema({
  product_id: { type: Number, index: true, unique: true },
  question_id: { type: Number, unique: true },
  question_body: String,
  question_date: { type: Date, default: Date.now },
  asker_name: String,
  question_helpfulness: Number,
  reported: Boolean,
  answer: [{
    // question_id: { type: Number, index: true, unique: true },
  answer_id: { type: Number, unique: true },
  answer_body: String
  answer_date: { type: Date, default: Date.now },
  answerer_name: String
  answer_helpfulness: Number,
  photos: [url: String]
  }]
});

const Question = mongoose.model('Question', QASchema);