import React, { useEffect, useState } from 'react'
import { DropdownButton, Dropdown, Button } from 'react-bootstrap'

import './App.css'
import Home from './Home'
// import MovieList from './MovieList'
import MovieList from './prototype.movielist'

function App() {
  const [genre, setGenre] = useState()
  const [decade, setDecade] = useState()
  const [movies, setMovies] = useState([])
  const [filteredMovies, setFilteredMovies] = useState()

  async function getData() {
    const response = await fetch('http://localhost:5000/movies')
    const data = await response.json()

    console.log(data)
    setMovies(data)
  }

  const isInDecade = (decade, release_date) => {
    const endYear = decade + 9
    const targetDate = new Date (release_date).getTime()
    const from = new Date(`${decade}-01-01`).getTime()
    const to = new Date(`${endYear}-12-31`).getTime()
    let isInside = false

    console.log(
      'Greater than start:',
        targetDate >= from,
        'Less than end:',
        targetDate <= to,
       )
       if(targetDate >= from && targetDate <= to){
         isInside = true
       }
       return isInside
  }

  const check2020 = isInDecade(2020, '1991-12-01')
  console.log('check2020',check2020)


  useEffect(() => {
    let filtered = movies

    if (genre) {
      filtered = filtered.filter(movie => movie.genre_ids.includes(genre))
    }

    if (decade) {
      filtered = filtered.filter(movie => isInDecade(decade, movie.release_date) 
      )
    }

    setFilteredMovies(filtered)
  }, [genre, decade, movies,])

  console.log(genre)
  console.log(decade)

  return (
    <div>
      <Home />

      <div>
        <Button variant="primary" className="btn" onClick={() => getData()}>
          Randomize
        </Button>
      </div>

      <div>
        <MovieList movies={filteredMovies !== undefined ? filteredMovies : movies} />
      </div>

      <div className="genre">
        <DropdownButton title="Genres">
          <Dropdown.Item id="27" onClick={() => setGenre(27)}>
            Horror
          </Dropdown.Item>
          <Dropdown.Item id="28" onClick={() => setGenre(28)}>
            Action
          </Dropdown.Item>
          <Dropdown.Item id="35" onClick={() => setGenre(35)}>
            Comedy
          </Dropdown.Item>
          <Dropdown.Item id="10751" onClick={() => setGenre(10751)}>
            Family
          </Dropdown.Item>
          <Dropdown.Item id="10749" onClick={() => setGenre(10749)}>
            Romance
          </Dropdown.Item>
          <Dropdown.Item id="18" onClick={() => setGenre(18)}>
            Drama
          </Dropdown.Item>
        </DropdownButton>
      </div>

      <div class="container">
        <DropdownButton title="Decades">
          <Dropdown.Item id="1980" onClick={() => setDecade(1980)}>
            1980s
          </Dropdown.Item>
          <Dropdown.Item id="1990" onClick={() => setDecade(1990)}>
            1990s
          </Dropdown.Item>
          <Dropdown.Item id="2000" onClick={() => setDecade(2000)}>
            2000s
          </Dropdown.Item>
          <Dropdown.Item id="2010" onClick={() => setDecade(2010)}>
            2010s
          </Dropdown.Item>
          <Dropdown.Item id="2020" onClick={() => setDecade(2020)}>
            2020s
          </Dropdown.Item>
        </DropdownButton>
      </div>
    </div>
  )
}
export default App
