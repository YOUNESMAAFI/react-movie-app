import React from "react";
import MovieCard from "./MovieCard";

const MoviesDisplay = (props) => {
  return (
    <div className="movies-display">
      {props.list.map((elem, index) => {
        return <MovieCard key={index} elem={elem}></MovieCard>;
      })}
    </div>
  );
};

export default MoviesDisplay;
