-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: escuela
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `alum_mat`
--

DROP TABLE IF EXISTS `alum_mat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `alum_mat` (
  `id_alum_mat` int NOT NULL AUTO_INCREMENT,
  `am_id_alum` int NOT NULL,
  `am_id_mat` int NOT NULL,
  PRIMARY KEY (`id_alum_mat`),
  KEY `fk_id_materias_idx` (`am_id_mat`),
  KEY `fk_id_alumnos_idx` (`am_id_alum`),
  CONSTRAINT `fk_id_alumnos` FOREIGN KEY (`am_id_alum`) REFERENCES `alumnos` (`id_alumnos`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_id_materias` FOREIGN KEY (`am_id_mat`) REFERENCES `materias` (`id_materias`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alum_mat`
--

LOCK TABLES `alum_mat` WRITE;
/*!40000 ALTER TABLE `alum_mat` DISABLE KEYS */;
INSERT INTO `alum_mat` VALUES (2,2,1),(3,2,2),(4,2,3),(5,3,4),(6,3,5),(7,3,6),(8,4,7),(9,4,8),(10,4,9),(11,5,10),(12,5,11),(13,5,12),(14,6,13),(15,6,14),(16,6,15),(17,7,16),(18,7,17),(19,7,18),(20,8,19),(21,8,20),(22,8,21);
/*!40000 ALTER TABLE `alum_mat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `alumnos`
--

DROP TABLE IF EXISTS `alumnos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `alumnos` (
  `id_alumnos` int NOT NULL AUTO_INCREMENT,
  `nom_alum` varchar(45) NOT NULL,
  `aps_alum` varchar(45) NOT NULL,
  `matricula` double NOT NULL,
  `carrera` varchar(45) NOT NULL,
  PRIMARY KEY (`id_alumnos`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alumnos`
--

LOCK TABLES `alumnos` WRITE;
/*!40000 ALTER TABLE `alumnos` DISABLE KEYS */;
INSERT INTO `alumnos` VALUES (2,'Carlos Alberto','Herrera Ulibarri',2015070637,'Computación'),(3,'Angel','Valdivia Sanchez',2015697845,'Computación'),(4,'Daniel','Lievano Rodriguez',2015785962,'Computación'),(5,'Alejandro','Solis Ortega',2015521301,'Computación'),(6,'Rogelio','Medina Avila',2014512369,'Comunicaciones y Electrónica'),(7,'Paola Michelle','Del Olmo Calzada',2016251369,'Comunicaciones y Electrónica'),(8,'Uriel','Mejia Ortega',2015998564,'Comunicaciones y Electrónica');
/*!40000 ALTER TABLE `alumnos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `materias`
--

DROP TABLE IF EXISTS `materias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `materias` (
  `id_materias` int NOT NULL AUTO_INCREMENT,
  `nom_mat` varchar(45) NOT NULL,
  `promedio` float NOT NULL,
  `semestre` varchar(45) NOT NULL,
  PRIMARY KEY (`id_materias`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materias`
--

LOCK TABLES `materias` WRITE;
/*!40000 ALTER TABLE `materias` DISABLE KEYS */;
INSERT INTO `materias` VALUES (1,'Humanidades',9,'2'),(2,'POO',8.9,'2'),(3,'Matemáticas Discretas',10,'2'),(4,'Estructura de datos',8,'3'),(5,'Circuitos Lógicos I',7,'3'),(6,'Circuitos de CD y CA',8.5,'3'),(7,'Redes de Computadoras',9.77,'8'),(8,'Sistemas Distribuidos',6.4,'8'),(9,'Inteligencia Artificial',9,'8'),(10,'Bases de Datos',10,'7'),(11,'Teoría de Control Digital',7.2,'7'),(12,'Administración de Ingeniería',8.6,'7'),(13,'Física Clásica',10,'1'),(14,'Fundamentos de Programación',10,'1'),(15,'Química Básica',10,'1'),(16,'Electrónica Digital',7.55,'6'),(17,'Microprocesadores',9.8,'6'),(18,'Comunicaciones Digitales',10,'6'),(19,'Análisis Numérico',8.9,'4'),(20,'Probabilidad y Estadística',7.4,'4'),(21,'Teorema de Circuitos Eléctricos',6.2,'4');
/*!40000 ALTER TABLE `materias` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-09 11:12:06
