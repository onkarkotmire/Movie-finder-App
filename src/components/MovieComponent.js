import React from "react";
import './MovieComp.css'

const MovieComponent = (props) => {
  const { Title, Year, imdbID, Type, Poster } = props.movie;

  return (
    <div

      className='MovieContainer'
    >
      <h2 className='MovieName'>{Title}</h2>
      <img src={Poster} alt={Title} className='CoverImage' />
      <div className='InfoColumn' style={{display: "flex", justifyContent:"center"}}>
        <div className="MovieInfo"><h3>{Year}</h3></div>
      </div>
    </div>
  );
};
export default MovieComponent;