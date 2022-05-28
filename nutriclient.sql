-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-05-2022 a las 13:55:04
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.0.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `nutriclient`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `Id` int(11) NOT NULL,
  `Nombre` varchar(30) NOT NULL,
  `Apellidos` varchar(60) NOT NULL,
  `Sexo` char(1) NOT NULL,
  `Telefono` int(9) NOT NULL,
  `Email` varchar(320) NOT NULL,
  `Poblacion` varchar(30) DEFAULT NULL,
  `Codigopostal` int(5) DEFAULT NULL,
  `Direccion` varchar(30) DEFAULT NULL,
  `NumConsultas` int(4) DEFAULT NULL,
  `Enfermedad` varchar(30) DEFAULT NULL,
  `DescEnfermedad` varchar(500) DEFAULT NULL,
  `Medicacion` tinyint(1) NOT NULL,
  `Descripcionmed` varchar(500) DEFAULT ' ',
  `Fechanac` varchar(20) NOT NULL,
  `Informacionadd` varchar(1000) DEFAULT ' ',
  `Nacionalidad` varchar(20) NOT NULL,
  `Situacionlaboral` varchar(20) DEFAULT NULL,
  `Fechacreacion` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`Id`, `Nombre`, `Apellidos`, `Sexo`, `Telefono`, `Email`, `Poblacion`, `Codigopostal`, `Direccion`, `NumConsultas`, `Enfermedad`, `DescEnfermedad`, `Medicacion`, `Descripcionmed`, `Fechanac`, `Informacionadd`, `Nacionalidad`, `Situacionlaboral`, `Fechacreacion`) VALUES
(38, 'Pablo', 'Albarez', 'H', 666888777, 'pablo@gmail.com', 'Castellon', 46010, 'Avenida Aragon', 0, 'undefined', 'undefined', 0, 'false', '28/05/2022', 'null', 'Portuguesa', 'Innactivo', '28/05/2022 11:56:41'),
(39, 'Florida', 'Florida', 'O', 666444555, 'florida@floridacliente.es', 'Catarroja', 46020, 'Avenida Florida', 0, 'undefined', 'undefined', 1, 'Pastillas para la tension', '28/05/2022', 'Intoler', 'Española', 'Activo', '28/05/2022 01:24:50');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `consultas`
--

CREATE TABLE `consultas` (
  `Id` int(11) NOT NULL,
  `Fecha` varchar(20) NOT NULL,
  `Pago` decimal(10,0) DEFAULT NULL,
  `Pagoadeber` tinyint(4) NOT NULL,
  `Idespecialista` int(11) NOT NULL,
  `Idcliente` int(11) NOT NULL,
  `IdInforme` int(11) NOT NULL,
  `Observaciones` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `especialistas`
--

CREATE TABLE `especialistas` (
  `Id` int(11) NOT NULL,
  `Nombre` varchar(30) NOT NULL,
  `Apellidos` varchar(60) NOT NULL,
  `Usuario` varchar(20) NOT NULL,
  `Contraseña` varchar(20) NOT NULL,
  `Activo` tinyint(1) NOT NULL DEFAULT 1,
  `Telefono` varchar(9) NOT NULL,
  `Email` varchar(320) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `especialistas`
--

INSERT INTO `especialistas` (`Id`, `Nombre`, `Apellidos`, `Usuario`, `Contraseña`, `Activo`, `Telefono`, `Email`) VALUES
(20, 'Florida', 'Florida', 'florida2', 'florida1', 1, '666997779', 'florida@florida.es'),
(23, 'Nutri', 'Nutri', 'Nutri', 'florida1', 1, '666999888', 'fhnwio@wikofjwo.es');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `informes`
--

CREATE TABLE `informes` (
  `Id` int(11) NOT NULL,
  `Peso` decimal(10,0) DEFAULT NULL,
  `Detalle` varchar(150) DEFAULT NULL,
  `Dieta` varchar(150) DEFAULT NULL,
  `Rutina` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `informes`
--

INSERT INTO `informes` (`Id`, `Peso`, `Detalle`, `Dieta`, `Rutina`) VALUES
(1, '80', 'Informe Prueba', 'Informe Prueba', 'Informe Prueba');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `consultas`
--
ALTER TABLE `consultas`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Idcliente` (`Idcliente`),
  ADD KEY `Idespecialista` (`Idespecialista`),
  ADD KEY `IdInforme` (`IdInforme`);

--
-- Indices de la tabla `especialistas`
--
ALTER TABLE `especialistas`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `Usuario` (`Usuario`);

--
-- Indices de la tabla `informes`
--
ALTER TABLE `informes`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT de la tabla `consultas`
--
ALTER TABLE `consultas`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `especialistas`
--
ALTER TABLE `especialistas`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de la tabla `informes`
--
ALTER TABLE `informes`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `consultas`
--
ALTER TABLE `consultas`
  ADD CONSTRAINT `consultas_ibfk_1` FOREIGN KEY (`Idcliente`) REFERENCES `clientes` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `consultas_ibfk_2` FOREIGN KEY (`IdInforme`) REFERENCES `informes` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `consultas_ibfk_3` FOREIGN KEY (`Idespecialista`) REFERENCES `especialistas` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
