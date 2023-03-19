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
-- Table structure for table `bm_notice`
--

DROP TABLE IF EXISTS `bm_notice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `bm_notice` (
  `id` int NOT NULL AUTO_INCREMENT,
  `notice_content` longtext NOT NULL,
  `notice_time` varchar(45) NOT NULL,
  `is_delete` varchar(45) NOT NULL,
  `notice_title` varchar(45) NOT NULL,
  `notice_publisher` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bm_notice`
--

LOCK TABLES `bm_notice` WRITE;
/*!40000 ALTER TABLE `bm_notice` DISABLE KEYS */;
INSERT INTO `bm_notice` VALUES (1,'这是一个测试','2022-10-17','1','三体','机械工业出版社'),(2,'123456','2022-10-18','1','这是使用接口后发布的第一个测试','zs1234'),(3,'321','2022-10-19','1','这是接口的第二个测试','zs1234'),(4,'1','2022-10-19','1','1','zs1234'),(5,'此管理系统的项目框架用的Vue,后端接口是用Node的express.此项目的花了一两周写的.其实规划是没怎么做好的,没有按照软件工程的步骤去做的,完全是做一步想一步.','2022-10-19','0','关于图书管理系统的公告','zs1234'),(6,'测试成功','2022-10-25','0','第二次测试','zs1234');
/*!40000 ALTER TABLE `bm_notice` ENABLE KEYS */;
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
