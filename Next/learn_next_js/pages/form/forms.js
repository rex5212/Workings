import React from 'react'
import { Button, Form } from 'react-bootstrap'
import BasePage from '../../components/BasePage'
import { useForm } from "react-hook-form"
import { useRouter } from "next/router"
import { db, set, ref } from "../../services/firebase"
import {v4} from "uuid"

const index = () => {

    const { push, query } = useRouter()

    const { register, handleSubmit } = useForm()

    function salvar(dados){
        const cursos = JSON.parse(window.localStorage.getItem('cursos')) || []
        cursos.push(dados)
        window.localStorage.setItem('cursos', JSON.stringify(cursos))
        const id = v4(dados)
        set(ref(db, 'dados/' + id), {
            name: dados.name,
            password: dados.password,
            modalidade : dados.modalidade
        });
        push("/form")
    }


    return (
        <BasePage>
            <Form>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="user name" {...register('name')}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" {...register('password')}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="modalidade">
                    <Form.Label>Modalidade</Form.Label>
                    <Form.Control type="text" placeholder="Modalidade" {...register('modalidade')}/>
                </Form.Group>

                <Button variant="primary" type="submit" onClick={handleSubmit(salvar/*, login*/)}>
                    Salvar
                </Button>
            </Form>
        </BasePage>
    )
}

export default index
