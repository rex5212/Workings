import Head from 'next/head';
import BasePage from '../components/BasePage';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Table } from 'react-bootstrap';
import apiArt from '../services/apiArt';
import { BsSearch } from "react-icons/bs";


export default function Home({ Art }) {
  return (
    <BasePage mainTitle='Obras de Artes'>
      <Table striped bordered hover className='mb-20'>
      <thead>
        <tr>
          <th>Detalhes</th>
          <th>Título</th>
          <th>Artista</th>
          <th>Departamento</th>
        </tr>
      </thead>
      <tbody>
        {Art.map(item => (
            <tr>
              <td><a href={`/detail/${item.id}`}><BsSearch /></a></td>
              <td>{item.title}</td>
              <td>{item.artist_title}</td>
              <td>{item.department_title}</td>
            </tr>
        ))}
      </tbody>
    </Table>
    </BasePage>
  )
}

export async function getServerSideProps(context) {

  const resultado = await apiArt.get('/artworks')
  const Art = resultado.data.data

  return {
      props: { Art, },
  }
}