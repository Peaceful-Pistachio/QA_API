-- I used Postgres client PGadmin and imported all the data through it.

copy public.questions (id, product_id, body, date_written, asker_name, asker_email, reported, helpful) FROM '/Users/annasarafanova/Desktop/sdc data/SDC Application Data - Atelier Project (_Clean_ Data Set) 5/questions.csv' CSV HEADER QUOTE '\"' ESCAPE '''';""

copy public.photos (id, answer_id, url) FROM '/Users/annasarafanova/Desktop/sdc data/answers_photos.csv' CSV HEADER QUOTE '\"' ESCAPE '''';""

copy public.answers (id, question_id, body, date_written, answerer_name, answerer_email, reported, helpful) FROM '/Users/annasarafanova/Desktop/sdc data/SDC Application Data - Atelier Project (_Clean_ Data Set) 5/answers.csv' CSV HEADER QUOTE '\"' ESCAPE '''';""
