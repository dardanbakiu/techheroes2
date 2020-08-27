-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 11, 2020 at 12:25 AM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `techheroes`
--

-- --------------------------------------------------------

--
-- Table structure for table `depozita`
--

CREATE TABLE `depozita` (
  `Anegativ` int(5) NOT NULL,
  `Apozitiv` int(5) NOT NULL,
  `Bnegativ` int(5) NOT NULL,
  `Bpozitiv` int(5) NOT NULL,
  `ABnegativ` int(5) NOT NULL,
  `ABpozitiv` int(5) NOT NULL,
  `Onegativ` int(5) NOT NULL,
  `Opozitiv` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `shtodhurues`
--

CREATE TABLE `shtodhurues` (
  `emri` varchar(20) NOT NULL,
  `mbiemri` varchar(20) NOT NULL,
  `email` varchar(20) NOT NULL,
  `grgjakut` varchar(20) NOT NULL,
  `kontakti` int(20) NOT NULL,
  `sasia` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `shtomarres`
--

CREATE TABLE `shtomarres` (
  `emri` varchar(20) NOT NULL,
  `mbiemri` varchar(20) NOT NULL,
  `grgjakut` varchar(20) NOT NULL,
  `sasia` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `emri` varchar(20) NOT NULL,
  `mbiemri` varchar(20) NOT NULL,
  `ditelindja` varchar(20) NOT NULL,
  `kontakti` int(20) NOT NULL,
  `email` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `grgjakut` varchar(20) NOT NULL,
  `semundje` varchar(20) NOT NULL,
  `tatoo` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
