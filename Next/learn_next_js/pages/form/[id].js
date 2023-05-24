import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import BasePage from '../../components/BasePage'
import { useForm } from "react-hook-form"
import { useRouter } from "next/router"
import Link from 'next/link'

const id = () => {

    const { push, query } = useRouter()

    const { register, handleSubmit, setValue } = useForm()

    useEffect(() => {

        if(query.id){
            const cursos = JSON.parse(localStorage.getItem('cursos')) || []
            const Curso = cursos[query.id]
    
            setValue("name", Curso.name)
            setValue("password", Curso.password)
            setValue("modalidade", Curso.modalidade)
        }

    }, [query.id])

    function salvar(dados){
        const cursos = JSON.parse(window.localStorage.getItem('cursos')) || []
        cursos.push(dados)
        window.localStorage.setItem('cursos', JSON.stringify(cursos))
        push("/form")
    }

    // function login(){
    //     <Link href="/form"></Link>
    // }
    

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

export default id
