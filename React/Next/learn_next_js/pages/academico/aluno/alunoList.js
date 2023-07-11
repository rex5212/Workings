import React, { useEffect, useState } from 'react'
import BasePage from '../../../components/BasePage'
import { Table } from 'react-bootstrap';
import Link from 'next/link';
import { FiXCircle } from "react-icons/fi"
import { HiPencil } from "react-icons/hi"
// import Router from 'next/router';
import axios from 'axios';


const index = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        // const datalocal = JSON.parse(localStorage.getItem('cursos'));
        axios.get("/api/aluno").then(resultado=>{
            setData(resultado.data)
        })
    }, [])

    console.log(data)

    function excluir(id) {
        if (confirm("Deseja Mesmo excluir essa informação")) {
            axios.delete("/api/aluno/" + id)

            // localStorage.setItem('cursos', JSON.stringify(data))
            // let newData = JSON.parse(localStorage.getItem('cursos'))
        }

        // data.splice(linha,1)
        // localStorage.setItem('cursos', JSON.stringify(data))
        // Router.reload()
    }


    return (
        <BasePage>
            <Table striped bordered hover className='mb-20'>
                <thead>
                    <tr>
                        <th>Edit</th>
                        <th>Exclude</th>
                        <th>Name</th>
                        <th>cpf</th>
                        <th>registration</th>
                        <th>email</th>
                        <th>Smartphone</th>
                        <th>cep</th>
                        <th>publicPlace</th>
                        <th>complement</th>
                        <th>number</th>
                        <th>neighborhood</th>
                    </tr>
                </thead>
                <tbody>
                    {data ? data.map((item) => (
                        <tr key={item.id}>
                            <th><Link href={`/academico/aluno/${item.id}`}><HiPencil /></Link></th>
                            <th><FiXCircle onClick={() => excluir(item.id)} /></th>
                            <th>{item.name}</th>
                            <th>{item.cpf}</th>
                            <th>{item.registration}</th>
                            <th>{item.email}</th>
                            <th>{item.smartphone}</th>
                            <th>{item.cep}</th>
                            <th>{item.publicPlace}</th>
                            <th>{item.complement}</th>
                            <th>{item.number}</th>
                            <th>{item.neighborhood}</th>
                        </tr>
                    )) : ""}
                </tbody>
            </Table>
            <Link href="/academico/aluno/alunoCreate" className='btn btn-success'>Novo</Link>
        </BasePage>
    )
}

export default index
