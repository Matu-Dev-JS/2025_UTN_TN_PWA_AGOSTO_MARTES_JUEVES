CREATE TABLE `mensajes_canal` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fk_id_miembro_workspace_emisor` int(11) DEFAULT NULL,
  `fk_canal_id` int(11) DEFAULT NULL,
  `texto` text DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `activo` tinyint(1) DEFAULT 1,
  PRIMARY KEY (`id`),
  KEY `fk_mensajes_canal__miembros_workspace` (`fk_id_miembro_workspace_emisor`),
  KEY `fk_mensajes_canal__canales_workspace` (`fk_canal_id`),
  CONSTRAINT `fk_mensajes_canal__canales_workspace` FOREIGN KEY (`fk_canal_id`) REFERENCES `canales_workspace` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_mensajes_canal__miembros_workspace` FOREIGN KEY (`fk_id_miembro_workspace_emisor`) REFERENCES `miembros_workspace` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci