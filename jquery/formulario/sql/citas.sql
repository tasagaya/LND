-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-04-2022 a las 12:05:43
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `citas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `agenda`
--

CREATE TABLE `agenda` (
  `nombre` varchar(10) DEFAULT NULL,
  `apellidos` varchar(20) DEFAULT NULL,
  `edad` tinyint(4) DEFAULT NULL,
  `nif` varchar(10) DEFAULT NULL,
  `correo` varchar(60) DEFAULT NULL,
  `isla` varchar(12) DEFAULT NULL,
  `fecha` varchar(10) DEFAULT NULL,
  `telefono` varchar(10) DEFAULT NULL,
  `hora` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `agenda`
--

INSERT INTO `agenda` (`nombre`, `apellidos`, `edad`, `nif`, `correo`, `isla`, `fecha`, `telefono`, `hora`) VALUES
('MARIO', 'GONZÁLEZ', 26, '12345678-A', 'fctminik@gmail.com', 'TF', '12/12/2000', '623565656', '10:00:00');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
