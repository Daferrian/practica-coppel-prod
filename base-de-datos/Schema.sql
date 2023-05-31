--Crear base de datos practica_coppel
--CREATE DATABASE practica_coppel

-- -----------------------------------------------------
-- Table "CATEGORIAS"
-- -----------------------------------------------------
CREATE TABLE  CATEGORIAS (
  "id_categoria" SERIAL NOT NULL,
  "descripcion" VARCHAR(45) NOT NULL,
  "estado" BOOLEAN NOT NULL,
  PRIMARY KEY ("id_categoria"));

-- -----------------------------------------------------
-- Table "MARCAS"
-- -----------------------------------------------------
CREATE TABLE  MARCAS (
  "id_marca" SERIAL NOT NULL,
  "descripcion" VARCHAR(45) NOT NULL,
  "estado" BOOLEAN NOT NULL,
  PRIMARY KEY ("id_marca"));

-- -----------------------------------------------------
-- Table "PRODUCTOS"
-- -----------------------------------------------------
CREATE TABLE  PRODUCTOS (
  "id_producto" SERIAL NOT NULL,
  "nombre" VARCHAR(45) NULL,
  "id_marca" INT NOT NULL,
  "id_categoria" INT NOT NULL,
  "estado" BOOLEAN NOT NULL,
  PRIMARY KEY ("id_producto"),
  CONSTRAINT "fk_PRODUCTOS_CATEGORIAS"
    FOREIGN KEY ("id_categoria")
    REFERENCES CATEGORIAS ("id_categoria")
    	ON DELETE NO ACTION
    	ON UPDATE NO ACTION,
  CONSTRAINT "fk_PRODUCTOS_MARCA"
    FOREIGN KEY ("id_marca")
    REFERENCES MARCAS ("id_marca")
    	ON DELETE NO ACTION
    	ON UPDATE NO ACTION
);
	
-- -----------------------------------------------------
-- Table "CARACTERISTICAS"
-- -----------------------------------------------------
CREATE TABLE CARACTERISTICAS (
	"id_caracteristica" SERIAL NOT NULL,
	"id_producto" INT NOT NULL,
	"descripcion" VARCHAR(100) NOT NULL,
	"valor" VARCHAR(200),
	PRIMARY KEY ("id_caracteristica"),
	CONSTRAINT "fk_PRODUCTOS_CARACTERISTICAS"
    FOREIGN KEY ("id_producto")
    REFERENCES PRODUCTOS ("id_producto")
    	ON DELETE NO ACTION
    	ON UPDATE NO ACTION
);




