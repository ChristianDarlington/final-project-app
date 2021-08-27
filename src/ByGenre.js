import React, { useEffect, useState } from 'react'
import { DropdownButton, Dropdown } from 'react-bootstrap'

function ByGenre() {
  const [genre, setGenre] = useState()
  //   const [data, setData] = useState()

  const handleGenre = e => {
    console.log(e)
    setGenre(e)
  }

  useEffect(() => {
    if (genre) fetch()
  }, [genre])

  console.log()

  return (
    <div className="Genre" onSelect={handleGenre}>
      <DropdownButton title="Genres">
        <Dropdown.Item eventKey="27">Horror</Dropdown.Item>
        <Dropdown.Item eventKey="28">Action</Dropdown.Item>
        <Dropdown.Item eventKey="35">Comedy</Dropdown.Item>
        <Dropdown.Item eventKey="10751">Family</Dropdown.Item>
        <Dropdown.Item eventKey="10749">Romance</Dropdown.Item>
        <Dropdown.Item eventKey="18">Drama</Dropdown.Item>
      </DropdownButton>
    </div>
  )
}

export default ByGenre
