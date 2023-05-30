import React, { useEffect, useState } from 'react'
import BasePage from '../../components/BasePage'
import { Table } from 'react-bootstrap';
import Link from 'next/link';
import { FiXCircle } from "react-icons/fi"
import { HiPencil } from "react-icons/hi"
// import Router from 'next/router';
import { db, get, ref, child, remove } from "../../services/firebase"
import Button from 'react-bootstrap/Button';


const index = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        // const datalocal = JSON.parse(localStorage.getItem('cursos'));

        const dbRef = ref(db);
            get(child(dbRef, `/dados`)).then((Date) => {
                if (Date.exists()) {
                  console.log([Date.val()]);
                } else {
                  console.log("No data available");
                }
              }).catch((error) => {
                console.error(error);
              });
    }, [])

    console.log(data)

    function excluir(date) {
        if (confirm("Deseja Mesmo excluir essa informação")) {
            remove(date.id)
            // localStorage.setItem('cursos', JSON.stringify(data))
            // let newData = JSON.parse(localStorage.getItem('cursos'))
            setData(newData)
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
                        <th>Passoword</th>
                        <th>Modalidade</th>
                    </tr>
                </thead>
                <tbody>
                    {data ? data.map((item, i) => (
                        <tr>
                            <th><Link href={`/form/${i}`}><HiPencil /></Link></th>
                            <th><FiXCircle onClick={() => excluir(item)} /></th>
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
