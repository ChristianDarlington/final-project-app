import React, { useEffect, useState } from 'react'
import { Row, Col, Card } from 'react-bootstrap'

function MovieList() {
//   useEffect(() => {
//     fetch('http://localhost:5000/genres')
//       .then(data => data.json())
//       .then(data => console.log(data))

//     fetch('http://localhost:5000/movies/53/2010')
//       .then(data => data.json())
//       .then(data => console.log(data))
//   }, [])

  const [movies, setMovies] = useState(null)

  useEffect(() => {
   getData()

   async function getData(){
     const response = await fetch('')
     const data = await response.json()

     setMovies(data)
   }
  },[])

  
  
  return (
    <div>
      {MovieList}
      <Row xs={1} md={2} className="g-4">
  {Array.from({ length: 4 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
            
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
     
    </div>
  )
}
  
export default MovieList
