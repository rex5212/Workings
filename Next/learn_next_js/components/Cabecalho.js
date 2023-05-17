import React from 'react';
import { Nav, Navbar, Container} from 'react-bootstrap';

const Cabecalho = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Next.js</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/cars/">Cars</Nav.Link>
            <Nav.Link href="/movies/popularFilmes/">Movies</Nav.Link>
            <Nav.Link href="/form/">Form</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
};

export default Cabecalho;