import React, { useEffect } from 'react'
import { useState } from 'react'
import { Dropdown } from 'react-bootstrap'

function ByGenre(){


  const [genre, setGenre] = useState(null)

  useEffect(() => {

  })

  return(
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
        <Dropdown.Item href="#/action-9">Romance</Dropdown.Item>
        <Dropdown.Item href="#/action-10">Family</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </div>
  )
}


export default ByGenre