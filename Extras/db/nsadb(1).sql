-- phpMyAdmin SQL Dump
-- version 4.1.6
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Nov 19, 2015 at 08:50 PM
-- Server version: 5.6.16
-- PHP Version: 5.5.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `nsadb`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE IF NOT EXISTS `admins` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `first_name`, `last_name`, `email`, `password`) VALUES
(1, 'John', 'Doe', 'johndoe@gmail.com', 'john');

-- --------------------------------------------------------

--
-- Table structure for table `apps`
--

CREATE TABLE IF NOT EXISTS `apps` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `store` varchar(45) NOT NULL,
  `admin` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`),
  KEY `admin_idx` (`admin`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `apps`
--

INSERT INTO `apps` (`id`, `name`, `store`, `admin`) VALUES
(3, 'Physics', 'Store1', 1);

-- --------------------------------------------------------

--
-- Table structure for table `chapters`
--

CREATE TABLE IF NOT EXISTS `chapters` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `app_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `app_id` (`app_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=26 ;

--
-- Dumping data for table `chapters`
--

INSERT INTO `chapters` (`id`, `name`, `app_id`) VALUES
(22, 'Chapter 1', 3),
(23, 'Chapter 2', 3),
(24, 'Chapter 3', 3);

-- --------------------------------------------------------

--
-- Table structure for table `formulas`
--

CREATE TABLE IF NOT EXISTS `formulas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `identifier` varchar(45) NOT NULL,
  `string` varchar(200) NOT NULL,
  `numerical_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `numerical_id` (`numerical_id`),
  KEY `numerical_idx` (`numerical_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `formulas`
--

INSERT INTO `formulas` (`id`, `identifier`, `string`, `numerical_id`) VALUES
(1, 'Identifier For Num 111', 'Formula String For Num 111', 3),
(4, '', 'Formula For Numerical 112', 6),
(5, '', 'Formula String For Num 122', 5);

-- --------------------------------------------------------

--
-- Table structure for table `numericals`
--

CREATE TABLE IF NOT EXISTS `numericals` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `identifier` varchar(45) NOT NULL,
  `statement` varchar(150) NOT NULL,
  `solution` varchar(1000) NOT NULL,
  `topic_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `topic_idx` (`topic_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `numericals`
--

INSERT INTO `numericals` (`id`, `identifier`, `statement`, `solution`, `topic_id`) VALUES
(3, 'Numerical 111', 'Statement 123', 'Solution 123', 7),
(4, 'Numerical 121', 'Statement For Num 121', '', 8),
(5, 'Numerical 122', '', '', 8),
(6, 'Numerical 112', 'Statement for Num 112', '', 7),
(7, 'Numerical 123', '', '', 8);

-- --------------------------------------------------------

--
-- Table structure for table `parameters`
--

CREATE TABLE IF NOT EXISTS `parameters` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `symbol` varchar(5) NOT NULL,
  `value` varchar(45) DEFAULT NULL,
  `default_value` varchar(45) DEFAULT NULL,
  `chapter_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `chapter_idx` (`chapter_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=38 ;

--
-- Dumping data for table `parameters`
--

INSERT INTO `parameters` (`id`, `name`, `symbol`, `value`, `default_value`, `chapter_id`) VALUES
(7, 'P11', 'P11 S', 'P11 Val', 'P11 Def Val', 22),
(8, 'P12', 'P12 S', 'P12 Val', 'P12 Def Val', 22),
(9, 'P13', 'P13 S', 'P13 Val', 'P13 Def Val', 22),
(10, 'P14', 'P14 S', 'P14 Val', 'P14 Def Val', 22),
(11, 'P15', 'P15 S', 'P15 Val', 'P15 Def Val', 22),
(12, 'P16', 'P16 S', 'P16 Val', 'P16 Def Val', 22),
(13, 'P17', 'P17 S', 'P17 Val', 'P17 Def Val', 22),
(14, 'P18', 'P18 S', 'P18 Val', 'P18 Def Val', 22),
(15, 'P19', 'P19 S', 'P19 Val', 'P19 Def Val', 22),
(35, 'Name123', 'Sym1', 'Val1', 'Def1', 23),
(36, 'Name', 'Symbo', 'Value', 'Def  Val', 24),
(37, 'Name2', 'Sym2', 'Val2', 'Def2', 23);

-- --------------------------------------------------------

--
-- Table structure for table `topics`
--

CREATE TABLE IF NOT EXISTS `topics` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `chapter_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `chapter_idx` (`chapter_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `topics`
--

INSERT INTO `topics` (`id`, `name`, `chapter_id`) VALUES
(7, 'Topic 1', 22),
(8, 'Topic 2', 22),
(9, 'Topic 2 - 1', 23),
(10, 'Topic 3 - 1', 24);

-- --------------------------------------------------------

--
-- Table structure for table `units`
--

CREATE TABLE IF NOT EXISTS `units` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `symbol` varchar(5) NOT NULL,
  `standard_multiplier` varchar(45) DEFAULT NULL,
  `chapter_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `chapter_idx` (`chapter_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `units`
--

INSERT INTO `units` (`id`, `name`, `symbol`, `standard_multiplier`, `chapter_id`) VALUES
(1, 'U1', 'S111', 'M111', 22),
(4, 'U4', 'S4', 'M4', 22);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `apps`
--
ALTER TABLE `apps`
  ADD CONSTRAINT `admin` FOREIGN KEY (`admin`) REFERENCES `admins` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `chapters`
--
ALTER TABLE `chapters`
  ADD CONSTRAINT `chapters_ibfk_1` FOREIGN KEY (`app_id`) REFERENCES `apps` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `formulas`
--
ALTER TABLE `formulas`
  ADD CONSTRAINT `numerical` FOREIGN KEY (`numerical_id`) REFERENCES `numericals` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `numericals`
--
ALTER TABLE `numericals`
  ADD CONSTRAINT `topic` FOREIGN KEY (`topic_id`) REFERENCES `topics` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `parameters`
--
ALTER TABLE `parameters`
  ADD CONSTRAINT `chapt` FOREIGN KEY (`chapter_id`) REFERENCES `chapters` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `topics`
--
ALTER TABLE `topics`
  ADD CONSTRAINT `chapter` FOREIGN KEY (`chapter_id`) REFERENCES `chapters` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `units`
--
ALTER TABLE `units`
  ADD CONSTRAINT `chap` FOREIGN KEY (`chapter_id`) REFERENCES `chapters` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
