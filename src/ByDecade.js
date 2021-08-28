import React, { useEffect, useState } from 'react'
import { Dropdown, Button } from 'react-bootstrap'

function ByDecade() {
  const [decade, setDecade] = useState()
  // const [data, setData] = useState()

  const handleDecade = e => {
    console.log(e)
    setDecade(e)
  }

  useEffect(() => {
    console.log('Searching.....')
    if (decade)
      fetch()
  })

  return (
    <div>
      <Dropdown>
        <div className="App container">
          <Dropdown.Toggle variant="success" onSelect={handleDecade}>
            Choose Decade
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Button>
              <Dropdown.Item onClick={() => "1980"}>1980s</Dropdown.Item>
              <Dropdown.Item onClick={() => "1990"}>1990s</Dropdown.Item>
              <Dropdown.Item onClick={() => "2000"}>2000s</Dropdown.Item>
              <Dropdown.Item onClick={() => "2010"}>2010s</Dropdown.Item>
              <Dropdown.Item onClick={() => "2010"}>2020s</Dropdown.Item>
            </Button>
          </Dropdown.Menu>
        </div>
      </Dropdown>
    </div>
  )
}

export default ByDecade
