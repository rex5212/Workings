import React from 'react'
import { Button, Form } from 'react-bootstrap'
import BasePage from '../../../components/BasePage'
import { useForm } from "react-hook-form"
import { useRouter } from "next/router"
import {v4 as uuid} from "uuid"
import axios from "axios";
import alunosValidator from '../../../validators/aluno'
import { mask, unmask } from 'remask'

const index = () => {

    const { push, query } = useRouter()

    const { register, setValue ,handleSubmit, formState: { errors } } = useForm()

    function salvar(dados){
        // const cursos = JSON.parse(window.localStorage.getItem('cursos')) || []
        // cursos.push(dados)
        // window.localStorage.setItem('cursos', JSON.stringify(cursos))

        axios.post("/api/aluno", dados)
        push("/academico/aluno/alunoList")
    }

    function handleChange(event) {
        const name = event.target.name
        const value = event.target.value
        let Mascara = event.target.getAttribute('mask')
        if (Mascara == 'name'){
            
        } else if (Mascara == 'cpf'){
            Mascara = '999.999.999-99'
        } else if (Mascara == 'registration'){
            '99999999999'
        } else if (Mascara == 'email'){
            
        } else if (Mascara == 'smartphone'){
            Mascara = ['(99) 9999-9999', '(99) 99999-9999']
        } else if (Mascara == 'cep'){
            Mascara = '99-999.999'
        } else if (Mascara == 'publicPlace'){
            
        } else if (Mascara == 'complement'){
            
        } else if (Mascara == 'number'){
            Mascara = ['(99) 99999-9999', '(99) 9999-9999']
        } else if (Mascara == 'complement'){
            
        }
        console.log(Mascara)

        setValue(name, mask(unmask(value), Mascara))
    }


    return (
        <BasePage>
            <Form>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" isInvalid={errors.name} mask='name' placeholder="name" {...register('name', alunosValidator.Name)} onChange={handleChange}/>
                    {errors.name && <small className='text-danger'>{errors.name.message}</small>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="cpf">
                    <Form.Label>Cpf</Form.Label>
                    <Form.Control type="text" placeholder="Cpf" isInvalid={errors.cpf} mask='cpf' {...register('cpf', alunosValidator.Cpf)} onChange={handleChange}/>
                    {errors.cpf && <small className='text-danger'>{errors.cpf.message}</small>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="registration">
                    <Form.Label>Registration</Form.Label>
                    <Form.Control type="text" placeholder="Registration" isInvalid={errors.registration} mask='registration' {...register('registration', alunosValidator.Registration)} onChange={handleChange}/>
                    {errors.registration && <small className='text-danger'>{errors.registration.message}</small>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="text" placeholder="put you email" isInvalid={errors.email} mask='email' {...register('email', alunosValidator.Email)} onChange={handleChange}/>
                    {errors.email && <small className='text-danger'>{errors.email.message}</small>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="smartphone">
                    <Form.Label>Smartphone</Form.Label>
                    <Form.Control type="text" placeholder="What is you Number" isInvalid={errors.smartphone} mask='smartphone' {...register('smartphone')} onChange={handleChange}/>
                    {errors.smartphone && <small className='text-danger'>{errors.smartphone.message}</small>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="cep">
                    <Form.Label>Cep</Form.Label>
                    <Form.Control type="text" placeholder="What is you Location" isInvalid={errors.cep} mask='cep' {...register('cep', alunosValidator.Cep)} onChange={handleChange}/>
                    {errors.cep && <small className='text-danger'>{errors.cep.message}</small>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="publicPlace">
                    <Form.Label>Public place</Form.Label>
                    <Form.Control type="text" placeholder="Public place" isInvalid={errors.publicPlace} mask='publicPlace' {...register('publicPlace', alunosValidator.PublicPlace)} onChange={handleChange}/>
                    {errors.publicPlace && <small className='text-danger'>{errors.publicPlace.message}</small>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="complement">
                    <Form.Label>Complement</Form.Label>
                    <Form.Control type="text" placeholder="Complement" isInvalid={errors.complement} mask='complement' {...register('complement', alunosValidator.Complement)} onChange={handleChange}/>
                    {errors.complement && <small className='text-danger'>{errors.complement.message}</small>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="number">
                    <Form.Label>Number</Form.Label>
                    <Form.Control type="text" placeholder="Number" isInvalid={errors.number} mask='number' {...register('number', alunosValidator.Number)} onChange={handleChange}/>
                    {errors.number && <small className='text-danger'>{errors.number.message}</small>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="neighborhood">
                    <Form.Label>Neighborhood</Form.Label>
                    <Form.Control type="text" placeholder="Neighborhood" isInvalid={errors.neighborhood} mask='neighborhood' {...register('neighborhood', alunosValidator.Neighborhood)} onChange={handleChange}/>
                    {errors.neighborhood && <small className='text-danger'>{errors.neighborhood.message}</small>}
                </Form.Group>

                <Button variant="primary" type="submit" onClick={handleSubmit(salvar)}>
                    Salvar
                </Button>
            </Form>
        </BasePage>
    )
}

export default index
