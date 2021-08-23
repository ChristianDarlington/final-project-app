import React from "react"
import { Dropdown} from 'react-bootstrap'

function ByDecade(){
  return(
    <div>
       <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Choose Decade
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">All Decades</Dropdown.Item>
              <Dropdown.Item href="#/action-2">1980's</Dropdown.Item>
              <Dropdown.Item href="#/action-3">1990's</Dropdown.Item>
              <Dropdown.Item href="#/action-4">2000's</Dropdown.Item>
              <Dropdown.Item href="#/action-5">2010's</Dropdown.Item>
              <Dropdown.Item href="#/action-6">2020's</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
    </div>
  )
}

export default ByDecade