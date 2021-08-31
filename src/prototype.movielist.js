import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'

function MovieList(props) {
  return (
    <>
      <Row>
        {props.movies && props.movies.slice(0, 10).map(movie => {
          return (
            
            <Col className="picture" key={movie.id} xs={10} md={4}>
            <Card.Img 
                className="movie"
                variant="top"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt="Images Coming"
                style={{ width: '50%', height: 200}}
                />
                <Card.Body>
                <Card.Title>
                </Card.Title>
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
