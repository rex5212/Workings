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

        axios.post("/api/sala", dados)

        push("/academico/sala/salaList")
    }


    return (
        <BasePage>
            <Form>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="name" {...register('name')}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="capacity">
                    <Form.Label>Capacity</Form.Label>
                    <Form.Control type="capacity" placeholder="Capacity" {...register('capacity')}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="type">
                    <Form.Label>Type</Form.Label>
                    <Form.Control type="text" placeholder="Type" {...register('type')}/>
                </Form.Group>

                <Button variant="primary" type="submit" onClick={handleSubmit(salvar/*, login*/)}>
                    Salvar
                </Button>
            </Form>
        </BasePage>
    )
}

export default index
