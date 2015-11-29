-- phpMyAdmin SQL Dump
-- version 4.2.7.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Nov 29, 2015 at 10:03 PM
-- Server version: 5.6.20
-- PHP Version: 5.5.15

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
`id` int(11) NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL
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
`id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `store` varchar(45) NOT NULL,
  `admin` int(11) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `apps`
--

INSERT INTO `apps` (`id`, `name`, `store`, `admin`) VALUES
(1, 'Numerical Solver', 'Android', 1);

-- --------------------------------------------------------

--
-- Table structure for table `chapters`
--

CREATE TABLE IF NOT EXISTS `chapters` (
`id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `app_id` int(11) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=89 ;

-- --------------------------------------------------------

--
-- Table structure for table `formulas`
--

CREATE TABLE IF NOT EXISTS `formulas` (
`id` int(11) NOT NULL,
  `identifier` varchar(45) NOT NULL,
  `string` varchar(200) NOT NULL,
  `numerical_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `numericals`
--

CREATE TABLE IF NOT EXISTS `numericals` (
`id` int(11) NOT NULL,
  `identifier` varchar(45) NOT NULL,
  `statement` varchar(150) NOT NULL,
  `solution` varchar(1000) NOT NULL,
  `topic_id` int(11) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

-- --------------------------------------------------------

--
-- Table structure for table `parameters`
--

CREATE TABLE IF NOT EXISTS `parameters` (
`id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `symbol` varchar(5) NOT NULL,
  `value` varchar(45) DEFAULT NULL,
  `default_value` varchar(45) DEFAULT NULL,
  `chapter_id` int(11) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=42 ;

-- --------------------------------------------------------

--
-- Table structure for table `topics`
--

CREATE TABLE IF NOT EXISTS `topics` (
`id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `chapter_id` int(11) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=16 ;

-- --------------------------------------------------------

--
-- Table structure for table `units`
--

CREATE TABLE IF NOT EXISTS `units` (
`id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `symbol` varchar(5) NOT NULL,
  `standard_multiplier` varchar(45) DEFAULT NULL,
  `chapter_id` int(11) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=10 ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
 ADD PRIMARY KEY (`id`), ADD UNIQUE KEY `email_UNIQUE` (`email`);

--
-- Indexes for table `apps`
--
ALTER TABLE `apps`
 ADD PRIMARY KEY (`id`), ADD UNIQUE KEY `name_UNIQUE` (`name`), ADD KEY `admin_idx` (`admin`);

--
-- Indexes for table `chapters`
--
ALTER TABLE `chapters`
 ADD PRIMARY KEY (`id`), ADD KEY `app_id` (`app_id`);

--
-- Indexes for table `formulas`
--
ALTER TABLE `formulas`
 ADD PRIMARY KEY (`id`), ADD UNIQUE KEY `numerical_id` (`numerical_id`), ADD KEY `numerical_idx` (`numerical_id`);

--
-- Indexes for table `numericals`
--
ALTER TABLE `numericals`
 ADD PRIMARY KEY (`id`), ADD KEY `topic_idx` (`topic_id`);

--
-- Indexes for table `parameters`
--
ALTER TABLE `parameters`
 ADD PRIMARY KEY (`id`), ADD KEY `chapter_idx` (`chapter_id`);

--
-- Indexes for table `topics`
--
ALTER TABLE `topics`
 ADD PRIMARY KEY (`id`), ADD KEY `chapter_idx` (`chapter_id`);

--
-- Indexes for table `units`
--
ALTER TABLE `units`
 ADD PRIMARY KEY (`id`), ADD KEY `chapter_idx` (`chapter_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `apps`
--
ALTER TABLE `apps`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `chapters`
--
ALTER TABLE `chapters`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=89;
--
-- AUTO_INCREMENT for table `formulas`
--
ALTER TABLE `formulas`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `numericals`
--
ALTER TABLE `numericals`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `parameters`
--
ALTER TABLE `parameters`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=42;
--
-- AUTO_INCREMENT for table `topics`
--
ALTER TABLE `topics`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT for table `units`
--
ALTER TABLE `units`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=10;
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
ADD CONSTRAINT `numerical` FOREIGN KEY (`numerical_id`) REFERENCES `numericals` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `numericals`
--
ALTER TABLE `numericals`
ADD CONSTRAINT `topic` FOREIGN KEY (`topic_id`) REFERENCES `topics` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `parameters`
--
ALTER TABLE `parameters`
ADD CONSTRAINT `chapt` FOREIGN KEY (`chapter_id`) REFERENCES `chapters` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `topics`
--
ALTER TABLE `topics`
ADD CONSTRAINT `chapter` FOREIGN KEY (`chapter_id`) REFERENCES `chapters` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `units`
--
ALTER TABLE `units`
ADD CONSTRAINT `chap` FOREIGN KEY (`chapter_id`) REFERENCES `chapters` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
