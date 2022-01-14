-- I used Postgres client PGadmin and imported all the data through i

copy public.questions (id, product_id, body, date_written, asker_name, asker_email, reported, helpful) FROM '/Users/annasarafanova/Desktop/sdc data/SDC Application Data - Atelier Project (_Clean_ Data Set) 5/questions.csv' CSV HEADER QUOTE '\"' ESCAPE '''';""


copy public.photos (id, answer_id, url) FROM '/Users/annasarafanova/Desktop/sdc data/answers_photos.csv' CSV HEADER QUOTE '\"' ESCAPE '''';""

copy public.answers (id, question_id, body, date_written, answerer_name, answerer_email, reported, helpful) FROM '/Users/annasarafanova/Desktop/sdc data/SDC Application Data - Atelier Project (_Clean_ Data Set) 5/answers.csv' CSV HEADER QUOTE '\"' ESCAPE '''';""

-- Converted date_written to an appropriate format

ALTER TABLE answers ADD answer_timestamp timestamp;
UPDATE answers SET answer_timestamp = to_timestamp(date_written / 1000);


ALTER TABLE questions ADD question_timestamp timestamp;
UPDATE questions SET question_timestamp = to_timestamp(date_written / 1000);

CREATE INDEX idx_product_id ON questions(product_id);
CREATE INDEX idx_question_id ON answers(question_id);
CREATE INDEX idx_answer_id ON photos(answer_id);


