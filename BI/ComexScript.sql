CREATE DATABASE comex;

USE comex;

DROP TABLE dim_via;
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
    nome_ncm VARCHAR(800),
    
    FOREIGN KEY (sk_unidade) REFERENCES dim_unidade (sk_unidade)
);


DROP TABLE IF EXISTS fato_exportacao;
CREATE TABLE fato_exportacao(
	sk_fato_exportacao INT AUTO_INCREMENT PRIMARY KEY,
    sk_via INT NOT NULL,
    sk_pais INT NOT NULL,
    sk_unidade INT NOT NULL,
    sk_urf INT NOT NULL,
    sk_ncm INT NOT NULL,
    qt_estat INT,
    kg_liquido DOUBLE,
    vl_fob DOUBLE,
    
    FOREIGN KEY (sk_via) REFERENCES dim_via (sk_via),
    FOREIGN KEY (sk_pais) REFERENCES dim_paises (sk_pais),
    FOREIGN KEY (sk_unidade) REFERENCES dim_unidade (sk_unidade),
    FOREIGN KEY (sk_urf) REFERENCES dim_urf (sk_urf),
    FOREIGN KEY (sk_ncm) REFERENCES dim_ncm (sk_ncm)
);

DROP TABLE IF EXISTS fato_importacao;
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
    vl_seguro DOUBLE,
    
    FOREIGN KEY (sk_via) REFERENCES dim_via (sk_via),
    FOREIGN KEY (sk_pais) REFERENCES dim_paises (sk_pais),
    FOREIGN KEY (sk_unidade) REFERENCES dim_unidade (sk_unidade),
    FOREIGN KEY (sk_urf) REFERENCES dim_urf (sk_urf),
    FOREIGN KEY (sk_ncm) REFERENCES dim_ncm (sk_ncm)
);

CREATE TABLE dim_tempo(
	sk_tempo INT AUTO_INCREMENT PRIMARY KEY,
    ano INT,
    mes INT
);

DESCRIBE via;
DESCRIBE dim_via;
SELECT * FROM dim_via;

ALTER TABLE via MODIFY COLUMN CO_VIA INT; 

INSERT INTO dim_via (sk_via, nome_via) 
	SELECT CO_VIA, NO_VIA 
		FROM via;

DESCRIBE pais;
SELECT * FROM pais;
SELECT * FROM dim_paises;
DESCRIBE dim_paises;

ALTER TABLE pais 
	MODIFY COLUMN CO_PAIS INT,
	MODIFY COLUMN CO_PAIS_ISON3 INT;

INSERT INTO dim_paises (sk_pais, nk_codigo_pais, nome_pais)
	SELECT CO_PAIS, CO_PAIS_ISON3, NO_PAIS 
		FROM pais;

DESCRIBE ncm_unidade;
DESCRIBE dim_unidade;
SELECT * FROM ncm_unidade;
SELECT * FROM dim_unidade;

ALTER TABLE ncm_unidade MODIFY COLUMN CO_UNID INT;

INSERT INTO dim_unidade (nk_codigo_unidade, nome_unidade, sigla_unidade)
	SELECT CO_UNID, NO_UNID, SG_UNID
		FROM ncm_unidade;
             
DESCRIBE urf;
DESCRIBE dim_urf;
SELECT * FROM urf;
SELECT * FROM dim_urf;

ALTER TABLE urf MODIFY COLUMN CO_URF INT;   

INSERT INTO dim_urf (nk_codigo_urf, nome_urf)
	SELECT CO_URF, SUBSTRING_INDEX(NO_URF, '-', -1) AS NO_URF 
		FROM urf;
        
DESCRIBE ncm;
DESCRIBE dim_ncm;
SELECT * FROM ncm;
SELECT * from dim_ncm;
        
ALTER TABLE ncm MODIFY COLUMN CO_UNID INT;

INSERT INTO dim_ncm (sk_unidade, nk_codigo_ncm, nome_ncm)
	SELECT unidade.sk_unidade, ncm.CO_NCM, ncm.NO_NCM_POR FROM ncm
		INNER JOIN dim_unidade AS unidade
			ON ncm.CO_UNID = unidade.nk_codigo_unidade;
            

DESCRIBE exp_2021;
DESCRIBE fato_exportacao;
SELECT * FROM exp_2021; 
SELECT * FROM fato_exportacao; 

ALTER TABLE fato_exportacao 
	ADD COLUMN ano CHAR(4), 
		ADD COLUMN mes CHAR(2),
			ADD COLUMN nome_via VARCHAR(300),
				ADD COLUMN uf CHAR(2);
  
INSERT INTO fato_exportacao (sk_via, sk_pais, sk_unidade, sk_ncm, sk_urf, ano, mes, qt_estat, kg_liquido, vl_fob, nome_via, uf)
	SELECT via.sk_via, pais.sk_pais, unidade.sk_unidade, ncm.sk_ncm, urf.sk_urf, exp.CO_ANO AS ano, exp.CO_MES AS mes, exp.QT_ESTAT, exp.KG_LIQUIDO, exp.VL_FOB, via.nome_via, exp.SG_UF_NCM
		FROM exp_2021 AS exp
			INNER JOIN dim_via AS via 
				ON via.sk_via = exp.CO_VIA
			INNER JOIN dim_paises AS pais 
				ON pais.nk_codigo_pais = exp.CO_PAIS
			INNER JOIN dim_unidade AS unidade 
				ON unidade.nk_codigo_unidade = exp.CO_UNID
			INNER JOIN dim_ncm AS ncm 
				ON ncm.nk_codigo_ncm = exp.CO_NCM
			INNER JOIN dim_urf AS urf 
				ON urf.nk_codigo_urf = exp.CO_URF;

DESCRIBE imp_2021;
DESCRIBE fato_importacao;
SELECT * FROM imp_2021; 
SELECT * FROM fato_importacao; 

ALTER TABLE fato_importacao
	ADD COLUMN ano CHAR(4), 
		ADD COLUMN mes CHAR(2),
			ADD COLUMN nome_via VARCHAR(300),
				ADD COLUMN uf CHAR(2);

INSERT INTO fato_importacao (sk_via, sk_pais, sk_unidade, sk_ncm, sk_urf, ano, mes, qt_estat, kg_liquido, vl_fob, nome_via, uf, vl_frete, vl_seguro)
	SELECT via.sk_via, pais.sk_pais, unidade.sk_unidade, ncm.sk_ncm, urf.sk_urf, imp.CO_ANO AS ano, imp.CO_MES AS mes, imp.QT_ESTAT, imp.KG_LIQUIDO, imp.VL_FOB, via.nome_via, imp.SG_UF_NCM, imp.VL_FRETE, imp.VL_SEGURO
		FROM imp_2021 AS imp
			INNER JOIN dim_via AS via 
				ON via.sk_via = imp.CO_VIA
			INNER JOIN dim_paises AS pais 
				ON pais.nk_codigo_pais = imp.CO_PAIS
			INNER JOIN dim_unidade AS unidade 
				ON unidade.nk_codigo_unidade = imp.CO_UNID
			INNER JOIN dim_ncm AS ncm 
				ON ncm.nk_codigo_ncm = imp.CO_NCM
			INNER JOIN dim_urf AS urf 
				ON urf.nk_codigo_urf = imp.CO_URF;

