import React, { useEffect, useState } from 'react'
import { Row, Col, Card, Button } from 'react-bootstrap'

function MovieList() {
  useEffect(() => {
    fetch('http://localhost:5000/movies')
      .then(data => data.json())
      .then(data => console.log(data))

    fetch('http://localhost:5000/movies')
      .then(data => data.json())
      .then(data => console.log(data))
  }, [])

  const [movies, setMovies] = useState([])
  async function getData() {
    const response = await fetch('http://localhost:5000/movies')
    const data = await response.json()
    console.log(data)
    setMovies(data)
  }
  useEffect(() => {
    getData()
    // .then()

    //  async function getData(){
    //    const response = await fetch('http://localhost:5000/movies/53/2000')
    //    const data = await response.json()

    //    setMovies(data)
    //  }
  }, [])

  return (
    <>
      <div>
        <Button variant="primary" className="btn" onClick={() => getData()}>
          Randomize
        </Button>
      </div>
      <Row>
        {movies.map(movie => {
          return (
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt="Image Coming"
                  style={{ width: '100%', height: 150 }}
                />
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  <Card.Text>{movie.overview}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
    </>
  )
}

export default MovieList
