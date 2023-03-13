import React, { useState } from "react";
import Axios from "axios";
import MovieComponent from "./components/MovieComponent";


export const API_KEY = "4ac85578";


function App() {
  const [searchQuery, updateSearchQuery] = useState("");

  const [movieList, updateMovieList] = useState([]);
  const [selectedMovie, onMovieSelect] = useState();
  const [timeoutId, updateTimeoutId] = useState();

  const fetchData = async (searchString) => {
    const response = await Axios.get(
      `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`,
    );
    updateMovieList(response.data.Search);
  };

  const onTextChange = (e) => {
    onMovieSelect("")
    clearTimeout(timeoutId);
    updateSearchQuery(e.target.value);
    const timeout = setTimeout(() => fetchData(e.target.value), 300);
    updateTimeoutId(timeout);
  };
  return (
    <div className='Container'>
      <div className='Header'>
        <div className='AppName' style={{ display: "flex", justifyContent: "center", textAlign: "center", backgroundColor: "black", color: "white"}}>
          <h1>Hooked</h1>
        </div>
        <div className='SearchBox' style={{display:"flex", justifyContent:"center", marginTop: "2%"}}>
          <input
            placeholder="Search Movie"
            value={searchQuery}
            onChange={onTextChange}
           className='SearchInput'
           style={{width: "50vw", height: "4vh", textAlign:"center", fontSize:"17px"}}
           />
        </div>
        <div style={{width:"100%", textAlign:"center", marginTop:"2%"}}><h2>Sharing a few of our Favourite movies</h2></div>
        
      </div>
     
      <div className='MovieListContainer' style={{ marginTop:"2%", display:"flex", justifyContent:"space-between", width:"70vw", flexWrap:"wrap", marginLeft: "12%", }} >
        {movieList?.length ? (
          movieList.map((movie, index) => (
            <MovieComponent
              key={index}
              movie={movie}
            />
          ))
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}

export default App;