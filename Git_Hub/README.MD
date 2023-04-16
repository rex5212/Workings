# Git_Work Git - GitHub

## Para iniciar o arquivo em um repositorio Git
    git init
    
## Caso mude, adicione, excluar ou cria o própio arquivo vai esta falando dessa mudanças, `U` para novo conteudo, `M` para modificações e `A` para Confirmação, logo depois necessita confirma essas mudanças, para isso utiliza
    git add .
    git add -A
    
## Logo depois deve-se da uma `commit`, aconselhável configura de maneira local ou global o nome e email do usuario que estara no commit
    git config --global user.name <Name>
    git config --global user.email <Email>
    git config --local user.name <Name>
    git config --local user.email <Email>
    
    
## Logo depois da o `commit` utilizando
    git commit -m "[Mensagem desejada]"

## Agora fala para o git qual repositorio que ele ira  coloca os seus codigos
    git remote add origin <Code of Repo. Git>
    
## Depois troca o nome da Branch master para main, que e a forma comum e mais utilizada, podendo se
    git branch -M main
    git branch -m <nome atual> <nome desejado>
    
## Logo depois se deve da o push para o Repo. Git, podendo se
    git push
    git push -u origin main

## Ao fazer isso vai pedi para loga na sua conta do Repo. Git


# Outras Funções Git

## Remove uma branch
     git branch -d <branch-name> or git branch -D <branch-name>
     
## Troca de Branch
    git checkout <nome da branch>

## Criar uma nova Branch
    git branch <New Brach Name>
    

## Mostra o Estado que os arquivos se enconta
    git status

## Mostra o Historico de commit
    git log

## Mostra o ultimo commit que foi executado
    git commit -amend


git commit -a -m "Update file with a new line" or git commit -am "Update file with a new line"
$ git rm --cached <file>
$ git checkout -b <nome da nova branch>
touch <arquivo>
start notepad <arquivo>
git clone <url> -b <branch>
