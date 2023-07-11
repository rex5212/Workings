import React from 'react'
import { Button, Form } from 'react-bootstrap'
import BasePage from '../../../components/BasePage'
import { useForm } from "react-hook-form"
import { useRouter } from "next/router"
import axios from "axios";


const index = () => {

    const { push, query } = useRouter()

    const { register, handleSubmit } = useForm()

    function salvar(dados){
        // const cursos = JSON.parse(window.localStorage.getItem('cursos')) || []
        // cursos.push(dados)
        // window.localStorage.setItem('cursos', JSON.stringify(cursos))

        axios.post("/api/professor", dados)

        push("/academico/professor/professorList")
    }


    return (
        <BasePage>
            <Form>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="name" {...register('name')}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="cpf">
                    <Form.Label>Cpf</Form.Label>
                    <Form.Control type="text" placeholder="Cpf" {...register('cpf')}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="registration">
                    <Form.Label>Registration</Form.Label>
                    <Form.Control type="text" placeholder="Registration" {...register('registration')}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="text" placeholder="put you email" {...register('email')}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="wage">
                    <Form.Label>Wage</Form.Label>
                    <Form.Control type="text" placeholder="What is you Wage" {...register('wage')}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="cellphone">
                    <Form.Label>Cellphone</Form.Label>
                    <Form.Control type="text" placeholder="What is you Number" {...register('cellphone')}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="cep">
                    <Form.Label>Cep</Form.Label>
                    <Form.Control type="text" placeholder="What is you Location" {...register('cep')}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="publicPlace">
                    <Form.Label>Public place</Form.Label>
                    <Form.Control type="text" placeholder="Public place" {...register('publicPlace')}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="complement">
                    <Form.Label>Complement</Form.Label>
                    <Form.Control type="text" placeholder="Complement" {...register('complement')}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="number">
                    <Form.Label>Number</Form.Label>
                    <Form.Control type="text" placeholder="Number" {...register('number')}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="neighborhood">
                    <Form.Label>Neighborhood</Form.Label>
                    <Form.Control type="text" placeholder="Neighborhood" {...register('neighborhood')}/>
                </Form.Group>

                <Button variant="primary" type="submit" onClick={handleSubmit(salvar/*, login*/)}>
                    Salvar
                </Button>
            </Form>
        </BasePage>
    )
}

export default index
