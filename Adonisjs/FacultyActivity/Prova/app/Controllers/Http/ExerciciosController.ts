// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ExerciciosController {
    ex1({request, response}){
        
        /*const dados = request.only(['tipoPessoa', 'cpf', 'cnpj', 'nome', 'sexo', 'cargo', 'salario'])
        const tipoPessoa = dados.tipoPessoa
        const cpf = dados.cpf
        const cnpj = dados.cnpj
        const nome = dados.nome 
        const sexo = dados.sexo 
        const cargo = dados.cargo 
        const salario = dados.salario*/

        const {tipoPessoa, cpf, cnpj, nome, sexo , cargo, salario} = request.body()

        if(tipoPessoa.toUpperCase() == 'PF' && !cpf){
            const error = {tipo: "error" , codigo: "CPF não informado", tipoPessoa, cpf}
            return  response.status(400).send(error)
        } 
        else if(tipoPessoa.toUpperCase() == 'PJ' && !cnpj ){
            const error = {tipo: "error" , codigo: "CNPJ não informado", tipoPessoa, cnpj}
            return  response.status(400).send(error)
        } 
        else if(tipoPessoa.toUpperCase() == 'PJ' && sexo){
            const error = {tipo: "error" , codigo: "O campo sexo só e permitido para Pessoa Fisica", tipoPessoa, sexo}
            return  response.status(400).send(error)
        } 
        else if(tipoPessoa.toUpperCase() == 'PJ' && cargo){
            const error = {tipo: "error" , codigo: "O campo cargo só é permitido para Pessoa Fisica", tipoPessoa, cargo}
            return  response.status(400).send(error)
        } 
        else if(cpf  && cnpj){
            const error = {tipo: "error" , codigo: "Favor informar somente uma opção, CPF ou CNPJ, de acordo com o Tipo de Pessoa", cpf, cnpj}
            return  response.status(400).send(error)
        } 
        else {
           var reajuste = 0
         if(tipoPessoa.toUpperCase() == "PF"){
            switch(cargo.toUpperCase()){
                case 'ESTAGIARIO' || 'ESTAGIÁRIO':
                    reajuste = 2; break 
                case 'TECNICO' || 'TÉCNICO':
                    reajuste = sexo.toUpperCase() == 'M' || sexo.toUpperCase() == "MASCULINO" ? 1.6 : 1.7; break 
                case 'GERENTE' :
                    reajuste = sexo.toUpperCase() == 'M' || sexo.toUpperCase() == "MASCULINO" ? 1.3 : 1.4; break 
                case 'DIRETOR' :
                    reajuste = sexo.toUpperCase() == 'M' || sexo.toUpperCase() == "MASCULINO" ? 1.2 : 1.3; break 
                case 'PRESIDENTE' :
                    reajuste = sexo.toUpperCase() == 'M' || sexo.toUpperCase() == "MASCULINO" ? 1.1 : 1.2; break
            }

        } else if (tipoPessoa.toUpperCase() == "PJ"){reajuste = 1.25}
        
        const novosalario = reajuste * salario 
        const result = {salario, nome, novosalario}
        return result
        
       }

    }     
}
