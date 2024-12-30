// import React, { useState } from 'react'

// export default function App() {

//   const [keyword, setKeyword] = useState("")
//   const [tracks, setTracks] = useState([])
//   const [isloading, setIsloading] = useState(true)

//   const getTracks = async () => {
//     let data = await fetch(`https://v1.nocodeapi.com/vinay2004/spotify/ezjMijoOhSBTMQBb/search?q=${keyword}&type=track`)

//     let convertedData = await data.json()
//     console.log(convertedData.tracks.items);
//     setTracks(convertedData.tracks.items)
//   }


//   return <>

//     {/* Adding Navbar */}
//     <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="#">
//           v-music
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon" />
//         </button>
//         <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarSupportedContent">

//           <input
//             value={keyword}
//             onChange={(e) => setKeyword(e.target.value)}
//             className="form-control me-2 w-75"
//             type="search"
//             placeholder="Search"
//             aria-label="Search"
//           />
//           <button onClick={getTracks} className="btn btn-outline-success" type="submit">
//             Search
//           </button>
//         </div>
//       </div>
//     </nav>




//     <div className="container ">
//       <div className="row ">
//         <button  class="btn btn-primary" type="button" disabled>
//           <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
//           <span role="status">Loading...</span>
//         </button>
//       </div>
//       <div className="row">
//         <h3>Search Result</h3>
//         {
//           tracks.map((elements) => {
//             return (
//               <div className='col-lg-3 col-md-6 py-2' key={elements.id}>


//                 {/* Creating Card Component */}
//                 <div className="card" >
//                   <img
//                     src={elements.album.images[0].url}
//                     className="card-img-top"
//                     alt="..."
//                   />
//                   <div className="card-body">
//                     <h5 className="card-title">{elements.name}</h5>
//                     <p className="card-text">
//                       Artist : {elements.album.artists[0].name}
//                     </p>
//                     <p className="card-text">
//                       Release Date : {elements.album.release_date}
//                     </p>


//                     {/* <audio src={elements.preview_url}>controls className="w-100"</audio> */}
//                     <audio src={elements.preview_url} controls className="w-100"></audio>

//                     {console.log(elements.preview_url)}
//                     <a href="#" className="btn btn-primary">
//                       Go somewhere
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             )
//           })
//         }
//       </div>
//     </div>
//         <div className="container mt-3" >
//         <h3>Playlist</h3>
//         </div>
    
//   </>
// }

