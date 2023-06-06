import React from 'react'
import { Nav, Navbar, Container} from 'react-bootstrap';

const BasePage = (props) => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">Art Chicago</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Obras</Nav.Link>
            <Nav.Link href="/types">Ttipos de Obras</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='bg-secondary py-1 text-white text-center'>
        <Container>
          <h1>{props.mainTitle}</h1>
        </Container>
      </div>

      <Container className='mt-4 w-100'>
            {props.children}
      </Container>

    </div>
  )
}

export default BasePage