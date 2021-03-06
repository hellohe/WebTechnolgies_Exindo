-- phpMyAdmin SQL Dump
-- version 4.1.12
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: May 09, 2014 at 03:52 PM
-- Server version: 5.6.16
-- PHP Version: 5.5.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `exindo`
--
CREATE DATABASE IF NOT EXISTS `exindo` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `exindo`;

-- --------------------------------------------------------

--
-- Table structure for table `rating`
--

CREATE TABLE IF NOT EXISTS `rating` (
  `ArticleTitle` varchar(200) NOT NULL,
  `TotalVotes` int(11) NOT NULL,
  `TotalPoints` int(11) NOT NULL,
  `AvgVote` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `rating`
--

INSERT INTO `rating` (`ArticleTitle`, `TotalVotes`, `TotalPoints`, `AvgVote`) VALUES
('r1', 211, 743, '3.52'),
('r2', 10, 34, '3.40'),
('acehnese_clothing', 3, 14, '4.67'),
('rincong', 1, 4, '4.00'),
('ketoprak', 1, 5, '5.00'),
('babi_panggang', 1, 4, '4.00'),
('banjarmasin', 1, 3, '3.00');

-- --------------------------------------------------------

--
-- Table structure for table `registration`
--

CREATE TABLE IF NOT EXISTS `registration` (
  `username` varchar(20) NOT NULL,
  `password` varchar(200) NOT NULL,
  `firstname` varchar(20) NOT NULL,
  `lastname` varchar(20) NOT NULL,
  `age` int(3) NOT NULL,
  `phone` int(15) NOT NULL,
  `email` varchar(50) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `registration`
--

INSERT INTO `registration` (`username`, `password`, `firstname`, `lastname`, `age`, `phone`, `email`) VALUES
('admin', '8e8be2b03e76a0b31593906724435a81', 'admin dont need name', 'admin dont need name', 999, 1234, 'admin@gmail.com'),
('johndoe', '34819d7beeabb9260a5c854bc85b3e44', 'john', 'doe', 13, 1234123, 'johndoe@gmail.com');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
