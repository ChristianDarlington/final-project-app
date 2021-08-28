import React, { useEffect } from 'react'
import { DropdownButton, Dropdown } from 'react-bootstrap'


function ByGenre() {
  useEffect(() => {
    fetch('http://localhost:5000/movies')
      .then(data => data.json())
      .then(data => console.log(data))
    },[])
    
  
  return (
    <div className="Genre">
      <DropdownButton title="Genres">
        <Dropdown.Item onClick={() =>"27"}>Horror</Dropdown.Item>
        <Dropdown.Item onClick={() =>"28"}>Action</Dropdown.Item>
        <Dropdown.Item onClick={() =>"35"}>Comedy</Dropdown.Item>
        <Dropdown.Item onClick={() =>"10751"}>Family</Dropdown.Item>
        <Dropdown.Item onClick={() =>"10749"}>Romance</Dropdown.Item>
        <Dropdown.Item onClick={() =>"18"}>Drama</Dropdown.Item>
      </DropdownButton>
    </div>
  )
}

export default ByGenre
