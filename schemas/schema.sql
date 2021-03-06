-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'product'
--
-- ---

DROP TABLE IF EXISTS product;

CREATE TABLE `product` (
  `id` INTEGER NOT NULL AUTO_INCREMENT DEFAULT NULL UNIQUE,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'questions'
--
-- ---
--Multicolumn idexes !!!!!!!!!!!
DROP TABLE IF EXISTS questions;

   CREATE TABLE questions (
   id SERIAL PRIMARY key,
   product_id INTEGER NOT NULL,
   body VARCHAR(1000) NOT NULL,
   date_written numeric default 0,
   asker_name VARCHAR(255) NOT NULL,
   asker_email  VARCHAR(255) NOT NULL,
   reported BOOLEAN DEFAULT false,
   helpful INTEGER DEFAULT 0
);

ALTER TABLE questions ADD question_timestamp timestamp;

CREATE INDEX idx_product_id ON questions(product_id);
CREATE INDEX idx_helpful ON questions(helpful);
ALTER TABLE questions ALTER column helpful drop not null;
ALTER TABLE questions ALTER COLUMN question_timestamp SET DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE questions RENAME COLUMN question_timestamp TO date;
ALTER TABLE questions DROP COLUMN date_written;



-- ---
-- Table 'answers'
--
-- ---

DROP TABLE IF EXISTS answers;

CREATE TABLE answers (
  id SERIAL PRIMARY key,
  question_id INTEGER NOT NULL,
  body VARCHAR(1000) NOT NULL,
  date_written numeric default 0,
  answerer_name VARCHAR(255) NOT NULL,
  answerer_email  VARCHAR(255) NOT NULL,
  reported BOOLEAN DEFAULT false,
  helpful INTEGER DEFAULT 0
);

ALTER TABLE answers ADD answer_timestamp timestamp;
UPDATE answers SET answer_timestamp = to_timestamp(date_written / 1000);

CREATE INDEX idx_question_id ON answers(question_id);
ALTER TABLE answers ALTER column helpful drop not null;
ALTER TABLE answers ALTER COLUMN answer_timestamp SET DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE answers RENAME COLUMN answer_timestamp TO date;
ALTER TABLE answers DROP COLUMN date_written;



-- ---
-- Table 'photos'
--
-- ---

DROP TABLE IF EXISTS photos;

CREATE TABLE photos (
   id SERIAL PRIMARY key,
	answer_id INTEGER ,
  url VARCHAR(1000)
)

CREATE INDEX idx_answer_id ON photos(answer_id);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE questions ADD FOREIGN KEY (product_id) REFERENCES product (id);
ALTER TABLE answers ADD FOREIGN KEY (question_id) REFERENCES questions (id);
ALTER TABLE photos ADD FOREIGN KEY (answer_id) REFERENCES answers (id);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `product` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `questions` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `answers` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `photos` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `product` (`id`) VALUES
-- ('');
-- INSERT INTO `questions` (`id`,`question`,`asker_name`,`reported`,`helpfullness`,`date`,`new field`,`product_id`) VALUES
-- ('','','','','','','','');
-- INSERT INTO `answers` (`id`,`answer`,`answerer_name`,`question_id`,`helpfullness`,`date`) VALUES
-- ('','','','','','');
-- INSERT INTO `photos` (`id`,`url`,`answer_id`) VALUES
-- ('','','');