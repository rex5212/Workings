import React, { useEffect, useState } from 'react'
import BasePage from '../../components/BasePage'
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
        axios.get("/api/disciplina").then(resultado=>{
            setData(resultado.data)
        })
    }, [])

    console.log(data)

    function excluir(id) {
        if (confirm("Deseja Mesmo excluir essa informação")) {
            axios.delete("/api/disciplina/" + id)

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
                        <th>Name</th>
                        <th>Duration</th>
                        <th>Modality</th>
                    </tr>
                </thead>
                <tbody>
                    {data ? data.map((item) => (
                        <tr key={item.id}>
                            <th><Link href={`/academico/disciplina/${item.id}`}><HiPencil /></Link></th>
                            <th><FiXCircle onClick={() => excluir(item.id)} /></th>
                            <th>{item.name}</th>
                            <th>{item.curso_id}</th>
                        </tr>
                    )) : ""}
                </tbody>
            </Table>
            <Link href="/academico/disciplina/disciplinaCreate" className='btn btn-success'>Novo</Link>
        </BasePage>
    )
}

export default index
