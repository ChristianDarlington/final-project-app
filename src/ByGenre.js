// import React, { useEffect, useState } from 'react'
// import { DropdownButton, Dropdown } from 'react-bootstrap'


// function ByGenre() {
//   useEffect(() => {
//     fetch('http://localhost:5000/movies')
//       .then(data => data.json())
//       .then(data => console.log(data))
//     },[])
    
//     const [genre, setGenre] = useState('')
//     const [decade, setDecade]= useState('')
//     const [movies, setMovies] = useState()

    
//     useEffect(() => {
//       const filteredList = movies.filter(movie => {
//       if(genre & decade) {
//         return movie.genre_ids === genre && movie.release_date === decade
//        } else if (genre) {
//          return genre
//        } else if (decade) {
//        return decade
//      } else {
//        return true
//      }
//    })
//    setMovies(filteredList)
//  },[genre])
  
//   return (
//     <div className="Genre">
//       <DropdownButton title="Genres">
//         <Dropdown.Item id="27" onClick={() => setGenre('27')}>Horror</Dropdown.Item>
//         <Dropdown.Item id="28" onClick={() => setGenre('Action')}>Action</Dropdown.Item>
//         <Dropdown.Item id="35" onClick={() => setGenre}>Comedy</Dropdown.Item>
//         <Dropdown.Item id="10751" onClick={() =>"10751"}>Family</Dropdown.Item>
//         <Dropdown.Item id="10749" onClick={() =>"10749"}>Romance</Dropdown.Item>
//         <Dropdown.Item id="18" onClick={() =>"18"}>Drama</Dropdown.Item>
//       </DropdownButton>
//     </div>






//   )
// }

// <div className="decade">
// <Dropdown>
//   <div className="App container">
//     <Dropdown.Toggle variant="success">
//       Choose Decade
//     </Dropdown.Toggle>

//     <Dropdown.Menu>
//         <Dropdown.Item onClick={() => "1980"}>1980s</Dropdown.Item>
//         <Dropdown.Item onClick={() => "1990"}>1990s</Dropdown.Item>
//         <Dropdown.Item onClick={() => "2000"}>2000s</Dropdown.Item>
//         <Dropdown.Item onClick={() => "2010"}>2010s</Dropdown.Item>
//         <Dropdown.Item onClick={() => "2010"}>2020s</Dropdown.Item>
//     </Dropdown.Menu>
//   </div>
// </Dropdown>
// </div>

// export default ByGenre
