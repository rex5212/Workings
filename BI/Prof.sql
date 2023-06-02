CREATE DATABASE comexProf;

USE comexProf;

-- Excluir a tabela fato primeiro para que as dimensões possam ser recriadas.
DROP TABLE IF EXISTS fato_exportacao;



-- excluir se existir e cria a tabela dimensão via
DROP TABLE IF EXISTS dim_via;
CREATE TABLE dim_via(
     sk_via INT  NOT NULL,
     nome_via VARCHAR(300),
  
  PRIMARY KEY (sk_via)
 );



DROP TABLE IF EXISTS dim_paises;
CREATE TABLE dim_paises(
   sk_pais INT AUTO_INCREMENT, 
   nk_codigo_pais INT NOT NULL,
   nome_pais varchar(300),
   
   PRIMARY KEY(sk_pais)
   
);



DROP TABLE IF EXISTS dim_unidade;
CREATE TABLE dim_unidade(
	sk_unidade INT AUTO_INCREMENT PRIMARY KEY,
    nk_codigo_unidade INT NOT NULL,
    nome_unidade VARCHAR(200),
    sigla_unidade VARCHAR(50)
);


DROP TABLE IF EXISTS dim_ncm;
CREATE TABLE dim_ncm(
 sk_ncm INT AUTO_INCREMENT PRIMARY KEY,
 sk_unidade INT NOT NULL,
 nk_codigo_ncm INT,
 nome_ncm VARCHAR(800)
);
-- adicionando uma chave estrangeira na dimensão ncm.
ALTER TABLE dim_ncm 
ADD CONSTRAINT FOREIGN KEY dim_ncm_fk (sk_unidade)
REFERENCES dim_unidade (sk_unidade);


 DROP TABLE IF EXISTS dim_urf;
CREATE TABLE dim_urf(
  sk_urf INT AUTO_INCREMENT PRIMARY KEY,
  nk_codigo_urf INT NOT NULL,
  nome_urf VARCHAR(400)
);



CREATE TABLE fato_exportacao(
sk_fato_exportacao INT AUTO_INCREMENT,
sk_via INT NOT NULL,
sk_pais INT NOT NULL,
sk_urf INT NOT NULL,
sk_ncm INT NOT NULL,
qt_stat INT,
kg_liquido DOUBLE,
vl_fob DOUBLE,

PRIMARY KEY (sk_fato_exportacao),
FOREIGN KEY (sk_via) REFERENCES dim_via (sk_via),
FOREIGN KEY (sk_pais) REFERENCES dim_paises (sk_pais),
FOREIGN KEY (sk_urf) REFERENCES dim_urf (sk_urf),
FOREIGN KEY (sk_ncm) REFERENCES dim_ncm (sk_ncm)

);


/*----------------------------------------------------------------------------------------------------------------

CONHECENDO OS ARQUIVOS EM CSV COM SELECT

1) Importar arquivos planos (flat files) = .csv
2) usar a instrução SELECT para ver os dados
3) transformar os dados se preciso
4) carregar os dados nas tabelas dimensões
-----------------------------------------------------------------------------------------------------------------*/


SELECT * FROM exp_2021;
 
 SELECT * 
    FROM exp_2021
WHERE co_ano = 2021;


-- converte texto para números inteiros
SELECT CAST(co_ano AS SIGNED) AS ANO
FROM exp_2021;

-- converte texte para número decimal
SELECT CAST(co_mes AS SIGNED) AS Mes
FROM exp_2021;


-- cancatenar ano e mes
select CONCAT(cast(co_ano as SIGNED),  cast(co_mes as SIGNED)) as AnoMEs
  from exp_2021
order by AnoMes;



-- concatenar campos como codigo ncm e ncm_português para facilitar a leitura
-- posso criar um novo código com prefixos e sufixos, por exemplo.

select * from ncm;

SELECT CONCAT('Prefixo ', co_ncm, ' - ', no_ncm_por, ' - ', ' Sufixo') AS coluna_concatenada
	FROM ncm;

/*---------------------------------------------------------------------------------------------------------------

 ETL - CARGA NA DIMENSÃO VIA
 objeto: dim_via
OBS) a chave natural co_via, foi colocada como sk_via
----------------------------------------------------------------------------------------------------------------*/

-- Passo 1) verificar os tipos de dados da tabela via.
SELECT co_via, 
       no_via 
FROM via;

DESCRIBE via;
  

-- Passo 2) verificar os tipos de dados da dimensão via e quantidade de campos projetados.   
DESCRIBE dim_via;
  
 
-- usamos a instrução select / insert.

INSERT INTO dim_via
       SELECT co_via AS SK_VIA, 
              no_via AS NOME_VIA
  FROM via;
  

-- conferir de os dados foram adicionados a dimensão via corretamente
SELECT * FROM dim_via;





/*---------------------------------------------------------------------------------------------------------------

 ETL - CARGA NA DIMENSÃO PAISES
 objeto: dim_Paises

----------------------------------------------------------------------------------------------------------------*/

-- Passo 1) verificar os tipos de dados da tabela pais
SELECT * FROM pais;

-- perceba que existem várias colunas que não utilizaremos no dw.
-- vamos utilizar apenas CO_PAIS, NO_PAIS.
DESCRIBE pais;

  
-- Passo 2) verificar os tipos de dados da dimensão via e quantidade de campos projetados.   
DESCRIBE dim_paises;
  


-- usamos a instrução select / insert.
 INSERT INTO dim_paises (nk_codigo_pais,
						nome_pais)
	    SELECT  CO_PAIS, 
				NO_PAIS
			FROM pais;
  
-- conferir de os dados foram adicionados a dimensão via corretamente
SELECT * FROM dim_paises;



/*---------------------------------------------------------------------------------------------------------------

 ETL - CARGA NA DIMENSÃO URF
 objeto: dim_urf

--------------------------------------------------------------------------------------------------------------*/
-- Passo 1) verificar os tipos de dados da tabela urf
SELECT * FROM urf;

-- perceba que o código concatenado junto com o nome da urf, vamos ter que separar
-- será que os códigos da urf são candidatas a chave primária?
-- vamos utilizar a função SUBSTRING_INDEX()
SELECT co_urf,
    -- SUBSTRING_INDEX(NO_URF, "-" , 1) AS coluna1,
    SUBSTRING_INDEX(NO_URF, "-", -1) AS no_urf
 FROM urf
ORDER BY co_urf;

  
-- Passo 2) verificar os tipos de dados da dimensão urf e quantidade de campos projetados.   
DESCRIBE dim_urf;
  
-- usamos a instrução select / insert.
 INSERT INTO dim_urf (nk_codigo_urf, 
					 nome_urf) 
		SELECT co_urf, 
       SUBSTRING_INDEX(NO_URF, "-", -1) AS no_urf
  FROM urf;
  
-- conferir de os dados foram adicionados a dimensão via corretamente
SELECT * FROM dim_urf;

/*---------------------------------------------------------------------------------------------------------------

 ETL - CARGA NA DIMENSÃO UNIDADE
 objeto: dim_unidade

--------------------------------------------------------------------------------------------------------------*/

-- Passo 1) verificar os tipos de dados da tabela unidade
SELECT * FROM unidade;
DESCRIBE unidade;

  
-- Passo 2) verificar os tipos de dados da dimensão unidade e quantidade de campos projetados.   
DESCRIBE dim_unidade;

-- usamos a instrução select / insert.
 INSERT INTO dim_unidade (nk_codigo_unidade,
						  nome_unidade,
                          sigla_unidade)
	    SELECT  CO_UNID, 
				NO_UNID,
                SG_UNID
			FROM unidade;
  
-- conferir de os dados foram adicionados a dimensão via corretamente
SELECT * FROM dim_unidade;



/*---------------------------------------------------------------------------------------------------------------

 ETL - CARGA NA DIMENSÃO  NCM
 objeto: dim_ncm

--------------------------------------------------------------------------------------------------------------*/


-- Passo 1) verificar os tipos de dados da tabela ncm
SELECT * FROM ncm;
DESCRIBE ncm;
-- Note: verifique que existem vários campos dos quais não utilizaremos no BI. vamos utilizar apenas
-- CO_NCM,
-- CO_UNID,
-- NO_NCM_POR

  
-- Passo 2) verificar os tipos de dados da dimensão ncm e quantidade de campos projetados.   
DESCRIBE dim_ncm;
-- 
-- usamos a instrução select / insert.
INSERT INTO dim_ncm (sk_unidade,
					  nk_codigo_ncm,
                      nome_ncm)
	
   SELECT          dim_unidade.sk_unidade,
						ncm.CO_NCM,
						ncm.NO_NCM_POR
		FROM ncm
			INNER JOIN dim_unidade
				ON ncm.co_unid = dim_unidade.nk_codigo_unidade;



/*ERRO Error Code: 1406. Data too long for column 'nome_ncm' at row 13283
 
 COMO CORRIGIR? ALTERAR o campo nome_ncm para varchar(1000)
 */
  ALTER TABLE dim_ncm
	MODIFY COLUMN nome_ncm VARCHAR(1000);
-- APÓS ALTERAR A COLUNAS, EXECUTAR O INSERT / SELECT NOVAMENTE !!!


  
  -- conferir de os dados foram adicionados a dimensão via corretamente
SELECT * FROM dim_ncm;




/*---------------------------------------------------------------------------------------------------------------

 ETL - CARGA NA FATO
 objeto: fato_exportacao e responder as perguntas negociais:
 1) QUANTOS PAISES O BRASIL EXPORTOU EM 2021? --> valor escalar
 2) QUAL O PAIS MAIS GEROU LUCRO EM 2021?    -- > valor escalar
 3) QUAIS VIAS UTILIZADAS NAS EXPORTAÇÕES?    -->  NÃO ESCALAR
 
--------------------------------------------------------------------------------------------------------------*/

-- ADICIONAR MAIS DUAS COLUNAS PARA QUE A TABELA FATO FIQUE MAIS COMPLETA
 -- 1) ALTERAR A TABELA FATO EXPORTAÇÃO E ADICIONAR MAIS UMA COLUNA CHAMADA ANO CHAR(4)
 -- 2) ALTERAR A TABELA FATO EXPOSTAÇÃO E ADICIONAR MAIS UMA COLUNA CHAMADA MES CHAR(02)
 
	DESCRIBE FATO_EXPORTACAO;


/*
FAZENDO ALTERAÇÕES NA TABELA FATO EXPORTAÇÃO PARA ADCIONAR COLUNAS
*/

ALTER TABLE fato_exportacao
  ADD COLUMN VIAS_UTILIZADAS_EXPORTACAO VARCHAR(300),
  ADD COLUMN ANO CHAR(4),
  ADD COLUMN MES CHAR(2);



-- MONTAR O SELECT PARA A FATO PRINCIPAL
INSERT INTO fato_exportacao
SELECT via.sk_via,
       pais.sk_pais,
       urf.sk_urf,
       ncm.sk_ncm,
       exp.qt_estat,
       exp.kg_liquido,
       exp.vl_fob,
       via.nome_via AS VIAS_UTILIZADAS_EXPORTACAO,
       exp.co_ano,
       exp.co_mes
    FROM exp_2021 AS exp
		INNER JOIN dim_via AS via
        ON exp.co_via = via.sk_via
			INNER JOIN dim_paises AS pais
            ON exp.co_pais = pais.nk_codigo_pais
				INNER JOIN dim_urf AS urf
                ON exp.co_urf = urf.nk_codigo_urf
					INNER JOIN dim_ncm as ncm
                    ON exp.co_ncm = ncm.nk_codigo_ncm;
                    
                    
/*--------------------------------------------------------------------------------------------------------------------
 EEXERCICIO FAZER O INSERT / SELECT DA FATO
 FAZER O INSERT
   SELECT
------------------------------------------------------------------------------------------------------------------*/

 -- RESPOSTAS PARA MEDIDAS ESCALARES.

-- 1) Para quantos países o Brasil exmportou em 2021?
-- PASSO 1) 
-- CRIAR UMA NOVA TABELA FATO PRA RESULTADOS ESCALARES

CREATE TABLE fato_exportacao_escalar(
	sk_fato_escalar int not null,
    qtd_paises_brasil_exp_2021 int not null,
    nome_pais_maior_lucro varchar(200) not null,

	PRIMARY KEY (sk_fato_escalar)
);

-- inicia uma variável e atribui o valor zero a ela
SET @QTD_PAISES := 0;
SET @PAIS_MAIOR_LUCRO := "";




-- select atribuindo o valor do retorno do select para a variável @QTD_PAISES
SELECT  @QTD_PAISES :=  COUNT(DISTINCT CO_PAIS) FROM exp_2021; -- '213'
-- SELECT @QTD_PAISES;



-- montando o select para obter a resposta e atribuir a variável 
SELECT paises.nome_pais,
       paises.nk_codigo_pais,
     SUM(CAST(exp.vl_fob AS DECIMAL(18,2))) AS VALOR_TOTAL_FOB
  FROM exp_2021 exp
	INNER JOIN dim_paises paises
	ON exp.co_pais = paises.nk_codigo_pais
		GROUP BY paises.nome_pais,
				 paises.nk_codigo_pais
					ORDER BY VALOR_TOTAL_FOB DESC;



-- subselect para atribuir a variavel
SELECT p.nome_pais, 
   SUM(CAST(exp.vl_fob AS DECIMAL(18,2))) AS VALOR_TOTAL_FOB
FROM exp_2021 exp
   INNER JOIN dim_paises p ON exp.co_pais = p.nk_codigo_pais
    GROUP BY p.nome_pais, p.nk_codigo_pais
       HAVING VALOR_TOTAL_FOB = (
          SELECT MAX(total_fob)
    FROM (
        SELECT SUM(CAST(exp_inner.vl_fob AS DECIMAL(18,2))) AS total_fob
        FROM exp_2021 exp_inner
        INNER JOIN dim_paises p_inner ON exp_inner.co_pais = p_inner.nk_codigo_pais
        GROUP BY p_inner.nome_pais, p_inner.nk_codigo_pais
    ) AS subquery
);
 
 



-- verificar se a relação de JOIN está ok.
SELECT exportacao.CO_ANO,
	   exportacao.CO_MES, 
       exportacao.CO_NCM, 
       exportacao.CO_PAIS,
       pais.nk_codigo_pais,
       exportacao.VL_FOB 
	FROM exp_2021 as exportacao 
     INNER JOIN dim_paises AS pais
       ON exportacao.co_pais = pais.nk_codigo_pais
	ORDER BY  pais.nk_codigo_pais desc;