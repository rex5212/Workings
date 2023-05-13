import Link from 'next/link'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import BasePage from '../../../components/BasePage'
import apiTMDB from '../../../services/apiTMDB'

const idAtor = ({ InfosAtor, Img, Atuou, AtuouTv }) => {

    console.log(InfosAtor)
    console.log(Img)
    console.log(Atuou)
    console.log(AtuouTv)

    const linkImg = 'https://image.tmdb.org/t/p/w500/'
    return (
        <BasePage mainTitle={InfosAtor.name}>
            <div className='d-flex gap-0 column-gap-3 border-primary border rounded-4 border-4 p-4 mb-5'>
                <Col title={InfosAtor.name} md={4}>
                    <Card className='card border-light mr-3'>
                        <Card.Img variante='top' src={linkImg + InfosAtor.profile_path} />
                        
                    </Card>
                </Col>
                <Col md={9}>
                    <p><strong>Aniversário:</strong> {InfosAtor.birthday}</p>
                    <p><strong>Local de Nascimento:</strong> {InfosAtor.place_of_birth}</p>
                    {InfosAtor.homepage ? (
                        <p><strong>Site:</strong> <Link href={InfosAtor.homepage}>{InfosAtor.homepage}</Link></p>
                    ) : (
                        ""
                    )}
                    <p style={{ width: '50em' }}><strong>Biografia:</strong> {InfosAtor.biography}</p>
                </Col>
            </div>
            <h2>Fotos</h2>
            <Row md={6} className='justify-content-between border border-primary gap-0 row-gap-3 column-gap-3 rounded-4 border-4 p-4 mb-4'>
                {Img.profiles.map(item => (
                    <Card className='card border border-primary border-3 p-2'>

                        <Card.Img variante='top' src={linkImg + item.file_path} />
                    </Card>
                ))}
            </Row>
            <h2>Filmes em que atuou</h2>
            <Row md={6} className='justify-content-between gap-0 row-gap-3 column-gap-3 border-primary border rounded-4 border-4 p-4'>
                {Atuou.map(item => (
                    <>
                        {item.poster_path ? (
                            <Card title={item.title} className='card border border-primary border-3 p-2'>

                                <Card.Img variante='top' src={linkImg + item.poster_path} />
                                <Link href={"/movies/" + item.id} class="btn btn-primary mt-2">Entrar</Link>
                            </Card>
                        ) : ("")}
                    </>
                ))}
            </Row>
            <h2>Series em que atuou</h2>
            <Row md={6} className='justify-content-between gap-0 row-gap-3 column-gap-3 border-primary border rounded-4 border-4 p-4'>
                {AtuouTv.map(item => (
                    <>
                        {item.poster_path ? (
                            <Card title={item.name} className='card border border-primary border-3 p-2'>
                                <Card.Img variante='top' src={linkImg + item.poster_path} />

                                <Link href={"/movies/series/" + item.id} class="btn btn-primary mt-2">Entrar</Link>
                            </Card>
                        ) : ("")}
                    </>

                ))}
            </Row>
        </BasePage>
    )
}

export default idAtor

export async function getServerSideProps(context) {
    const id = context.params.idAtores

    // ID DO ATOR(A)

    const resultado = await apiTMDB.get('/credit/' + id)
    const Ator = resultado.data.person.id

    // INFORMAÇÕES DO AUTOR(A)

    const resAtor = await apiTMDB.get('/person/' + Ator + '?language=pt-BR')
    const InfosAtor = resAtor.data

    // IMAGENS DO AUTO(A)

    const ImgAtor = await apiTMDB.get('/person/' + Ator + '/images?language=pt-BR')
    const Img = ImgAtor.data

    // FILMES EM QUE ATUOU

    const AtorFilmes = await apiTMDB.get('/person/' + Ator + '/movie_credits?language=pt-BR')
    const Atuou = AtorFilmes.data.cast

    // SERIES EM QUE ATUOU

    const AtorTv = await apiTMDB.get('/person/' + Ator + '/tv_credits?language=pt-BR')
    const AtuouTv = AtorTv.data.cast

    return {
        props: { InfosAtor, Img, Atuou, AtuouTv }, // will be passed to the page component as props
    }
}

{/* {InfosAtor.map(item => (
                <p></p>
            ))} */}