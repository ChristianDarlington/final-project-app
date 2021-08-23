import React from 'react'
import { Dropdown } from 'react-bootstrap'

function ByGenre(){
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
        <Dropdown.Item href="#/action-6">Sci-Fi</Dropdown.Item>
        <Dropdown.Item href="#/action-7">Adventure</Dropdown.Item>
        <Dropdown.Item href="#/action-8">Animation</Dropdown.Item>
        <Dropdown.Item href="#/action-9">Romance</Dropdown.Item>
        <Dropdown.Item href="#/action-10">Crime</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </div>
  )
}


export default ByGenre