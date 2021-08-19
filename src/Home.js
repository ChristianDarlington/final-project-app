import React from 'react'
import { Dropdown, Button, Card, Container, Row, Col } from 'react-bootstrap'

function Home() {
  return (
    <>
      {/* Header  */}
      <h1 className="header">RandomSpot</h1>

      {/* Options Selection Wrapper */}
      <div className="d-flex flex-row">
        {/* Column One */}
        <div className="choose-decade">
          <Dropdown>
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
          </Dropdown>
        </div>

        {/* Column Two */}
        <div className="choose-genre">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Choose Genre
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">All Genres</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Horror</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Comedy</Dropdown.Item>
              <Dropdown.Item href="#/action-4">Drama</Dropdown.Item>
              <Dropdown.Item href="#/action-5">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-6">Sci-Fi</Dropdown.Item>
              <Dropdown.Item href="#/action-7">Adventure</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        {/* Column Three */}

        <div>
          <Button variant="primary" className="btn">
            Randomize
          </Button>
        </div>
      </div>

      <Container>
        <Row>
          <Col>
            <>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </>
          </Col>
          <Col>
            <>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </>
          </Col>
          <Col>
            <>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </>
          </Col>
        </Row>
        <Row>
          <Col>
            <>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </>
          </Col>
          <Col>
            <>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </>
          </Col>
          <Col>
            <>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </>
          </Col>
        </Row>
      </Container>

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
