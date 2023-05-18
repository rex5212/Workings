import React, { useEffect, useState } from 'react'
import BasePage from '../../components/BasePage'
import { Table } from 'react-bootstrap';
import Link from 'next/link';

const index = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        // const datalocal = JSON.parse(localStorage.getItem('cursos'));
        setData(JSON.parse(localStorage.getItem('cursos')))
    }, [])

    console.log(data)

    return (
        <BasePage>
            <Table striped bordered hover className='mb-20'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Passoword</th>
                        <th>Modalidade</th>
                    </tr>
                </thead>
                <tbody>
                    {data ? data.map(item => (
                    <tr>
                        <th>{item.name}</th>
                        <th>{item.password}</th>
                        <th>{item.modalidade}</th>
                    </tr>
                    )) : ""}
                </tbody>
            </Table>
            <Link href="/form/forms" className='btn btn-success'>Novo</Link>
        </BasePage>
    )
}

export default index
