import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

function Home() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <h1 className="header">RandomSpot</h1>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home"></Nav.Link>
            <Nav.Link href="#features"></Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Home
