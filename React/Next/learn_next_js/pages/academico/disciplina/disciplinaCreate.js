import React from 'react'
import { Button, Form } from 'react-bootstrap'
import BasePage from '../../components/BasePage'
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

        axios.post("/api/disciplinas", dados)

        push("/form")
    }


    return (
        <BasePage>
            <Form>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="name" {...register('name')}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="duration">
                    <Form.Label>Duration</Form.Label>
                    <Form.Control type="duration" placeholder="Duration" {...register('duration')}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="modality">
                    <Form.Label>Modality</Form.Label>
                    <Form.Control type="text" placeholder="Modality" {...register('modality')}/>
                </Form.Group>

                <Button variant="primary" type="submit" onClick={handleSubmit(salvar/*, login*/)}>
                    Salvar
                </Button>
            </Form>
        </BasePage>
    )
}

export default index
