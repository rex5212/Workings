import React, { useEffect, useState } from 'react'
import BasePage from '../../components/BasePage'
import { Table } from 'react-bootstrap';
import Link from 'next/link';
import { FiXCircle } from "react-icons/fi"
import { HiPencil } from "react-icons/hi"
// import Router from 'next/router';
import { db } from "../../services/firebase"
import Button from 'react-bootstrap/Button';
import { child, get, ref, remove } from 'firebase/database';
import axios from 'axios';


const index = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        // const datalocal = JSON.parse(localStorage.getItem('cursos'));
        axios.get("/api/disciplinas").then(resultado=>{
            setData(resultado.data)
        })
    }, [])

    console.log(data)

    function excluir(item) {
        if (confirm("Deseja Mesmo excluir essa informação")) {
            axios.delete("api/disciplinas", item)

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
                    {data ? data.map((item, i) => (
                        <tr>
                            <th><Link href={`/form/${i}`}><HiPencil /></Link></th>
                            <th><FiXCircle onClick={() => excluir(item)} /></th>
                            <th>{item.name}</th>
                            <th>{item.duration}</th>
                            <th>{item.modality}</th>
                        </tr>
                    )) : ""}
                </tbody>
            </Table>
            <Link href="/form/forms" className='btn btn-success'>Novo</Link>
        </BasePage>
    )
}

export default index
