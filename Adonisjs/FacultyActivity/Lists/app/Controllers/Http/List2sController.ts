// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class List2sController {
    ex1({request, response}){

        const dados = request.body()

        if (dados.qMinima < 0 || dados.qMaxima < 0){
            const resultado = {type: "ERROR", dados: "Preencido errado"}
            return response.status(400).send(resultado)
        } else {

        const estoqmedio = (dados.qMinima + dados.qMaxima) / 2

        const resultado = {
            estoqmedio
        }
        return resultado
        }
    }

    ex2({request, response}){

        const dados = request.body()

        if(dados.winT <= 0 || dados.children < 0 || dados.timeh < 0){
            const resultado = {type: "ERROR", dados: "Preencido errado"}
            return response.status(400).send(resultado)
        }

        const realwin = (0.3 * dados.winT * dados.children + dados.winT) * dados.timeh

        const resultado = {
            realwin
        }

        return resultado
    }

    ex3({request, response}){

        const dados = request.body()

        if (dados.days < 0){
            const resultado = {type: "ERROR", dados: "Preencido errado"}
            return response.status(400).send(resultado)
        }

        const ageD = (dados.wear * 365) + (dados.months * 30) + dados.days 

        const resultado = {
            ageD
        }

        return resultado
    }
    
    ex4({request, response}){

        const ageDs = request.only("days")
        let year_s = 0
        let year = 0
        let month_s = 0
        let month = 0

        if(ageDs.days < 0){
            const resultado = {type: "ERROR", dados: "Preencido errado"}
            return response.status(400).send(resultado)
        } else {

        if(ageDs.days >= 365){
          year_s = ageDs.days % 365
          year = ageDs.days / 365   
        }

        if(year_s < 365 && year_s >= 30){
          month_s = year_s % 30
          month = year_s / 30            
        }

        const days_ = month_s

        const resultado = {
            year,
            month,
            days_
        }

        return resultado
        }
    }
    
    ex5({request, response}){

        const dados = request.body()

        if(dados.A1 < 0 || dados.A2 < 0 || dados.A3 < 0){
            const resultado = {type: "ERROR", dados: "Preencido errado"}
            return response.status(400).send(resultado)
        }

        const note = (dados.A1 * 2 + dados.A2 * 3 + dados.A3 * 5) / (2 + 3 + 5)

        const resultado = {
            note
        }

        return resultado
    }
    
    ex6({request, response}){
        
        const seconds = request.only("seconds")
        let hour_s = 0
        let hour = 0
        let minute_s = 0
        let minute = 0

        if(seconds.seconds < 0){
            const resultado = {type: "ERROR", dados: "Preencido errado"}
            return response.status(400).send(resultado)
        } else {

        if(seconds.seconds < 3600){
            hour_s = seconds.seconds
        }
        
        if(seconds.seconds >= 3600){
          hour_s = seconds.seconds % 3600
          hour = seconds.seconds / 3600  
        }

        if(hour_s >= 60 && hour_s < 3600){
          minute_s = hour_s % 60
          minute = hour_s / 60            
        }

        const seconds_ = minute_s 

        const resultado = {
            hour,
            minute,
            seconds_
        }

        return resultado
        }
    }
    
    ex7({request, response}){
        
        const name = request.only("name")
        const dados = request.body()

        if(dados.salarioF < 0 || dados.Nvendas < 0){
            const resultado = {type: "ERROR", dados: "Preencido errado"}
            return response.status(400).send(resultado)
        }

        const salarioT = (dados.salarioF * dados.percentual) * dados.Nvendas + dados.salarioF

        const resultado = {name, salarioT}

        return resultado
    }
    
    ex8({request, response}){

        const valores = request.body()

        if (valores.distancia < 0 || valores.tempo < 0){
            const resultado = {type: "ERROR", dados: "Preencido errado"}
            return response.status(400).send(resultado)
        }
        
        const Vm = valores.distancia / valores.tempo

        const resultado = {
            mensagem: 'A velocidade média do(a) ' + valores.name + ' foi ' + Vm + ' km/h'
        } 

        return resultado
    }
    
    ex9({request, response}){
        
        const dados = request.body()

        if(dados.salario < 0){
            const resultado = {type: "ERROR", dados: "Preencido errado"}
            return response.status(400).send(resultado)
        } else if(dados.salario > 1000){
          const resultado = {type: "ERROR", aumento: "Negado"}
          return response.status(400).send(resultado)
        } else {

        const salarioR = (dados.salario * dados.aumento) + dados.salario

        return {salarioR}
        }
    }
}
