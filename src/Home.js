import React from 'react'
import { Dropdown, Button, Navbar, Container, Nav } from 'react-bootstrap'

function Home() {
  return (
    <>
      {/* Header  */}

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

      {/* Options Selection Wrapper */}
      <div className="d-flex flex-row">
        {/* Column One */}
        <div className="choose-decade">
          {/* <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Choose Decade
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">All Decades</Dropdown.Item>
              <Dropdown.Item href="#/action-2">1980's</Dropdown.Item>
              <Dropdown.Item href="#/action-3">1990's</Dropdown.Item>
              <Dropdown.Item href="#/action-4">2000's</Dropdown.Item>
              <Dropdown.Item href="#/action-5">2010's</Dropdown.Item>
              <Dropdown.Item href="#/action-6">2020's</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> */}
        </div>

        {/* Column Two */}
        

        {/* Column Three */}

        <div>
          <Button variant="primary" className="btn">
            Randomize
          </Button>
        </div>
      </div>

      

      {/* 
        1. Div wrapper for data results (movies) area
        2. Grid of movies. Can use a grid from Bootstrap: https://react-bootstrap.netlify.app/layout/grid/
        3. For each movie, can use a card component:  https://react-bootstrap.netlify.app/components/cards/
        can include image, title, descrp. etc.
      */}
    </>
  )
}

export default Home
