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
    
## Criação da seed
    node ace make:seeder <Nome>
    
    
## Criação da Validação para recebimento de informação
    node ace make:validator <Nome>
    
## Instalar o Autentificado
    npm i @adonisjs/auth
    
## Configuração do Autentificado
    node ace configure @adonisjs/auth
   
## Instalar a biblioteca Hash
    npm i phc-argon2
    
# Comandos do Banco de Dados
## Criar/Iniciar a(s) Tabela(s)
    node ace migration:run
    
## Apaga a ultima atualização da(s) Tabela(s)
    node ace migration:rollback
    
## Reinicia a(s) Tabela(s)
    node ace migration:reset
    
## Reinicia e criar/iniciar a(s) Tabela(s)
    node ace migration:refresh
    
## Inicia a seed
    node ace db:seed
    
## Escolhe qual Seed vai se iniciada
    node ace db:seed -i
    
## Reinicia e criar/iniciar a(s) Tabela(s) juntamente com o carregamento da seeders
    node ace migration:refresh -seed
  
