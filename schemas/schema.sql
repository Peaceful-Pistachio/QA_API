-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'product'
--
-- ---

DROP TABLE IF EXISTS `product`;

CREATE TABLE `product` (
  `id` INTEGER NOT NULL AUTO_INCREMENT DEFAULT NULL UNIQUE,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'questions'
--
-- ---

DROP TABLE IF EXISTS `questions`;

CREATE TABLE `questions` (
  `id` INTEGER AUTO_INCREMENT NOT NULL,
  `question` VARCHAR(255) NOT NULL,
  `asker_name` VARCHAR(100) NOT NULL,
  `reported` BOOLEAN DEFAULT NULL, -- ---or `reported` tinyint(1) DEFAULT NULL
  `helpfullness` INTEGER NOT NULL DEFAULT NULL,
  `date` DATE DEFAULT GETDATE()
  `product_id` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'answers'
--
-- ---

DROP TABLE IF EXISTS `answers`;

CREATE TABLE `answers` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `question_id` INTEGER NOT NULL,
  `body` VARCHAR(255) NOT NULL,
  `date_written` DATE DEFAULT GETDATE()
  `answerer_name` VARCHAR(100) NOT NULL,
  `answerer_email`  VARCHAR(100) NOT NULL,
  `reported` BOOLEAN DEFAULT NULL,
  `helpful` INTEGER NOT NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'photos'
--
-- ---

DROP TABLE IF EXISTS `photos`;

CREATE TABLE `photos` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `url` INTEGER NOT NULL DEFAULT NULL,
  `answer_id` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `questions` ADD FOREIGN KEY (product_id) REFERENCES `product` (`id`);
ALTER TABLE `answers` ADD FOREIGN KEY (question_id) REFERENCES `questions` (`id`);
ALTER TABLE `photos` ADD FOREIGN KEY (answer_id) REFERENCES `answers` (`id`);

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