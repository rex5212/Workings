import React from 'react'
import Link from 'next/link';
import {Card, Col, Row } from 'react-bootstrap'
import apiArt from '../../services/apiArt'
import 'bootstrap/dist/css/bootstrap.min.css'
import BasePage from '../../components/BasePage';


const id = ({ ArtDetail }) => {
  return (
    <BasePage mainTitle={ArtDetail.title}>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Header className='bg-danger text-light text-center'>
              Foto
            </Card.Header>
            <Card.Img src={"https://www.artic.edu/iiif/2/" + ArtDetail.image_id + "/full/843,/0/default.jpg"} />
            <Card.Body>
              <Link href={"https://www.artic.edu/iiif/2/" + ArtDetail.image_id + "/full/843,/0/default.jpg"} className='btn btn-primary'>Ampliar</Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={ArtDetail.image_id ? 8 : 12}>
          <Card>
            <Card.Header className='bg-danger text-light text-center'>
              {ArtDetail.title}
            </Card.Header>
            <Card.Body>
                <Card.Text>{`Título: ${ArtDetail.title}`}</Card.Text>
                <Card.Text>{`Artista: ${ArtDetail.artist_title}`}</Card.Text>
                <Card.Text>{`Departamento: ${ArtDetail.department_title}`}</Card.Text>
                <Card.Text>{`Origem(Local): ${ArtDetail.place_of_origin}`}</Card.Text>
                <Card.Text>{`Tamanho: ${ArtDetail.dimensions}`}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Link href="/" style={{width: '10%'}} className='btn btn-success mt-2'>Voltar</Link>
      </Row>
    </BasePage>
  )
}

export default id

export async function getServerSideProps(context) {

  const id = context.params.id

  const resultado = await apiArt.get(`/artworks/${id}`)
  const ArtDetail = resultado.data.data
  console.log(ArtDetail)

  return {
    props: { ArtDetail, },
  }
}