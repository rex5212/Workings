# Introdução Adonis

## Criar uma pasta Adonis
    npm init adonis-ts-app@latest <Nome do arquivo adonis>
    
## Instalar o Banco de Dados
    npm i @adonisjs/lucid
    
## Configura o Banco de Dados
    node ace configure @adonisjs/lucid
    
## Criação da Tabela do Banco de Dados (Separado)
    node ace make:migration <Nome>

## Criação do Model do Banco de Dados (Separado)
    node ace make:model <Nome>
    
## Criação da Tabela e o model do Bnaco de Dados juntos (Aconselhável)
    node ace make:model <Nome> -m
    
## Criação da Validação para recebimento de informação
    node ace make:validator <Nome>
    
## Instalar o Autentificado
    npm i @adonisjs/auth
    
## Configuração do Autentificado
    node ace configure @adonisjs/auth
   
## Instalar a biblioteca Hash
    npm i phc-argon2
   
