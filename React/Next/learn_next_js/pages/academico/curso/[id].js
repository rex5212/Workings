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
            axios.get("/api/curso/" + query.id).then(resultado=>{
                const objectData = resultado.data
                console.log(objectData)

                for(let atributo in objectData){
                    setValue(atributo, objectData[atributo])
                }
            })
        
        }
    }, [query.id])

    function modificar(dados){
        axios.put("/api/curso/" + dados.id, dados)
        push("/academico/curso/cursoList")
    }



    return (
        <BasePage>
            <Form>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" {...register('name')} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="duration">
                    <Form.Label>Duration</Form.Label>
                    <Form.Control type="duration" {...register('duration')} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="modality">
                    <Form.Label>Modality</Form.Label>
                    <Form.Control type="text"  {...register('modality')} />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={handleSubmit(modificar)}>
                    Salvar
                </Button>
            </Form>
        </BasePage>
    )
}

export default id
