import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'

function MovieList(props) {
  return (
    <>
      <Row>
        {props.movies && props.movies.slice(0, 4).map(movie => {
          return (
            <Col className="picture">
              <Card.Img
                className="movie"
                variant="top"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt="Image Coming"
                style={{ width: '80%', height: 200, flexWrap: 'wrap', flexDirection: 'column' }}
              />
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Col>
          )
        })}
      </Row>
    </>
  )
}

export default MovieList
