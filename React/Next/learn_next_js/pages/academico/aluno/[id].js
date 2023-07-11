import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import BasePage from '../../../components/BasePage'
import { useForm } from "react-hook-form"
import { useRouter } from "next/router"
import axios from 'axios'


const id = () => {

    const { push, query } = useRouter()
    const { register, handleSubmit, setValue } = useForm()

    useEffect(() => {

        if (query.id) {
            axios.get("/api/aluno/" + query.id).then(resultado => {
                const objectData = resultado.data
                console.log(objectData)

                for (let atributo in objectData) {
                    setValue(atributo, objectData[atributo])
                }
            })

        }
    }, [query.id])

    function modificar(dados) {
        axios.put("/api/aluno/" + dados.id, dados)
        push("/academico/aluno/alunoList")
    }



    return (
        <BasePage>
            <Form>
                <Form.Group className="mb-3" controlId="id">
                    <Form.Control type="text" {...register('id')} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" {...register('name')} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="cpf">
                    <Form.Label>Cpf</Form.Label>
                    <Form.Control type="text" {...register('cpf')} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="registration">
                    <Form.Label>Registration</Form.Label>
                    <Form.Control type="text" {...register('registration')} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="text" {...register('email')} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="smartphone">
                    <Form.Label>Smartphone</Form.Label>
                    <Form.Control type="text" {...register('smartphone')} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="cep">
                    <Form.Label>Cep</Form.Label>
                    <Form.Control type="text" {...register('cep')} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="publicPlace">
                    <Form.Label>Public place</Form.Label>
                    <Form.Control type="text" {...register('publicPlace')} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="complement">
                    <Form.Label>Complement</Form.Label>
                    <Form.Control type="text" {...register('complement')} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="number">
                    <Form.Label>Number</Form.Label>
                    <Form.Control type="text" {...register('number')} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="neighborhood">
                    <Form.Label>Neighborhood</Form.Label>
                    <Form.Control type="text" {...register('neighborhood')} />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={handleSubmit(modificar)}>
                    Salvar
                </Button>
            </Form>
        </BasePage>
    )
}

export default id
