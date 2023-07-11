import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Container } from 'react-bootstrap';
import Cabecalho from "./Cabecalho";
import Licenca from './Licenca';

const BasePage = (props) => {
  return (
    <>
      <Cabecalho />
      <h2 className='border-bottom border-dark border-3 p-2 w-100 text-center'>{props.title}</h2>

      <div className='mb-5'>
        <Container>
          {props.children}
        </Container>
      </div>

      <Licenca />
    </>
  )
}

export default BasePage