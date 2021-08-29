import React, { useEffect } from 'react'
import './App.css'
import Home from './Home'
import MovieList from './MovieList'

const APIkey = `7432733ca0b97edebd21bdd62d35ddd5`

function App() {
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${APIkey}`)
      .then(data => data.json())
      .then(movies => console.log(movies))
  }, [])

  return (
    <div className="container">
      <Home />

      <div className="row">
        <MovieList />
      </div>

      {/* <ByGenre />
      <ByDecade /> */}
    </div>
  )
}
export default App
