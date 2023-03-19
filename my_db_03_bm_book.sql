-- MySQL dump 10.13  Distrib 8.0.16, for Win64 (x86_64)
--
-- Host: localhost    Database: my_db_03
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bm_book`
--

DROP TABLE IF EXISTS `bm_book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `bm_book` (
  `id` int NOT NULL AUTO_INCREMENT,
  `book_name` varchar(255) NOT NULL,
  `book_author` varchar(255) NOT NULL,
  `book_publish` varchar(45) NOT NULL,
  `book_page` int NOT NULL,
  `book_publisher` varchar(45) NOT NULL,
  `book_catalog` longtext NOT NULL,
  `book_digest` mediumtext NOT NULL,
  `book_stats` varchar(45) NOT NULL,
  `book_start` varchar(45) DEFAULT NULL,
  `book_end` varchar(45) DEFAULT NULL,
  `book_borrower` varchar(45) DEFAULT NULL,
  `is_putaway` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bm_book`
--

LOCK TABLES `bm_book` WRITE;
/*!40000 ALTER TABLE `bm_book` DISABLE KEYS */;
INSERT INTO `bm_book` VALUES (1,'123','123','123',123,'123','123','123','未借出','','','','上架中'),(2,'大王子','321','321',123,'321','123','321','未借出','','','','下架中'),(3,'小王子','安托万·德·圣-埃克苏佩里','教育局出版社',200,'2014年','《小王子》第一章（初次了解到讲述者是一个飞行员以及他对大人的想法）《小王子》第一章（初次了解到讲述者是一个飞行员以及他对大人的想法）《小王子》第一章（初次了解到讲述者是一个飞行员以及他对大人的想法）《小王子》第二章（讲述者在沙漠中坠机以及结识小王子）《小王子》第二章（讲述者在沙漠中坠机以及结识小王子）《小王子》第二章（讲述者在沙漠中坠机以及结识小王子）','小说叙述者是个飞行员，他在故事一开始告诉读者，他在大人世界找不到一个说话投机的人，因为大人都太讲实际了。接着，飞行员讲了六年前他因飞机故障迫降在撒哈拉沙漠遇见小王子的故事。神秘的小王子来自另一个星球。飞行员讲了小王子和他的玫瑰的故事。小王子为什么离开自己的星球；在抵达地球之前，他又访问过哪些星球。他转述了小王子对六个星球的历险，他遇见了国王、爱虚荣的人、酒鬼、商人、点灯人、地理学家、蛇、三枚花瓣的沙漠花、玫瑰园、扳道工、商贩、狐狸以及我们的叙述者飞行员本人。','未借出','','','','上架中'),(15,'三体','刘慈欣','机械工业出版社',500,'2001/01/01','第一章','这是三体的简介','未借出','','','','下架中'),(16,'添加新图书的测试','It\'s Me','it\'sMe',520,'2022年','[第一章]旅行计划;[第二章]旅行开始','这是关于我的新图书的测试','未借出','','','','下架中');
/*!40000 ALTER TABLE `bm_book` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-19 14:07:56
