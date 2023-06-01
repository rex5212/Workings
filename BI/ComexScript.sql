CREATE DATABASE comex;

USE comex;

CREATE TABLE dim_via(
	sk_via INT AUTO_INCREMENT PRIMARY KEY,
    nome_via VARCHAR(300) NOT NULL
);

CREATE TABLE dim_paises(
	sk_pais INT AUTO_INCREMENT PRIMARY KEY,
    nk_codigo_pais INT NOT NULL,
    nome_pais VARCHAR(300)
);

CREATE TABLE dim_unidade(
	sk_unidade INT AUTO_INCREMENT PRIMARY KEY,
    nk_codigo_unidade INT NOT NULL,
    nome_unidade VARCHAR(200),
    sigla_unidade VARCHAR(50)
);

CREATE TABLE dim_urf(
	sk_urf INT AUTO_INCREMENT PRIMARY KEY,
    nk_codigo_urf INT NOT NULL,
    nome_urf VARCHAR(400)
);

CREATE TABLE dim_ncm(
	sk_ncm INT AUTO_INCREMENT PRIMARY KEY,
    sk_unidade INT NOT NULL,
    nk_codigo_ncm INT,
    nome_ncm VARCHAR(800)
);

ALTER TABLE dim_ncm
ADD CONSTRAINT FOREIGN KEY dim_ncm_fk (sk_unidade)
REFERENCES dim_unidade (sk_unidade);

CREATE TABLE fato_exportacao(
	sk_fato_exportacao INT AUTO_INCREMENT PRIMARY KEY,
    sk_via INT NOT NULL,
    sk_pais INT NOT NULL,
    sk_unidade INT NOT NULL,
    sk_urf INT NOT NULL,
    sk_ncm INT NULL,
    qt_stat INT,
    kg_liquido DOUBLE,
    vl_fob DOUBLE
);

CREATE TABLE fato_importacao(
	sk_fato_importacao INT AUTO_INCREMENT PRIMARY KEY,
	sk_via INT NOT NULL,
    sk_pais INT NOT NULL,
    sk_unidade INT NOT NULL,
    sk_urf INT NOT NULL,
    sk_ncm INT NULL,
    qt_estat INT,
    kg_liquido DOUBLE,
    vl_fob DOUBLE,
    vl_frete DOUBLE,
    vl_seguro DOUBLE
);

ALTER TABLE fato_exportacao
ADD CONSTRAINT FOREIGN KEY fato_via_fk (sk_via)
REFERENCES dim_via (sk_via);

ALTER TABLE fato_exportacao 
ADD CONSTRAINT FOREIGN KEY fato_pais_fk (sk_pais)
REFERENCES dim_paises (sk_pais);

ALTER TABLE fato_exportacao 
ADD CONSTRAINT FOREIGN KEY fato_unidade_fk (sk_unidade)
REFERENCES dim_unidade (sk_unidade);

ALTER TABLE fato_exportacao 
ADD CONSTRAINT FOREIGN KEY fato_urf_fk (sk_urf)
REFERENCES dim_urf (sk_urf);

ALTER TABLE fato_exportacao
ADD CONSTRAINT FOREIGN KEY fato_ncm_fk (sk_ncm)
REFERENCES dim_ncm (sk_ncm);

---

ALTER TABLE fato_importacao
ADD CONSTRAINT FOREIGN KEY fato_via_fk (sk_via)
REFERENCES dim_via (sk_via);

ALTER TABLE fato_importacao 
ADD CONSTRAINT FOREIGN KEY fato_pais_fk (sk_pais)
REFERENCES dim_paises (sk_pais);

ALTER TABLE fato_importacao 
ADD CONSTRAINT FOREIGN KEY fato_unidade_fk (sk_unidade)
REFERENCES dim_unidade (sk_unidade);

ALTER TABLE fato_importacao 
ADD CONSTRAINT FOREIGN KEY fato_urf_fk (sk_urf)
REFERENCES dim_urf (sk_urf);

ALTER TABLE fato_importacao
ADD CONSTRAINT FOREIGN KEY fato_ncm_fk (sk_ncm)
REFERENCES dim_ncm (sk_ncm);

CREATE TABLE dim_tempo(
	sk_tempo INT AUTO_INCREMENT PRIMARY KEY,
    ano INT,
    mes INT
);


--- DROP DATABASE comex;

INSERT INTO dim_via (sk_via, nome_via)
VALUES(CO_VIA, NO_VIA);