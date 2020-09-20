import React, { useState } from "react";

//Styles
import "./App.css";
import "antd/dist/antd.css";

//components
import MoviesDisplay from "./components/MoviesDisplay";
import Navbar from "./components/Navbar";
import AddMovie from "./components/AddMovie";

function App() {
  const [movie, setMovie] = useState(false);
  const [list, setList] = useState([
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BMjQ1NjM3MTUxNV5BMl5BanBnXkFtZTgwMDc5MTY5OTE@._V1_.jpg",
      name: "hacksaw Ridge",
      year: "2016",
      rating: 5,
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/en/f/f3/Greyhound_poster.jpeg",
      name: "Gery Hound",
      year: "2020",
      rating: 4.5,
    },
    {
      image:
        "https://www.zeppjamiesonfiction.com/wp-content/uploads/2020/02/220px-1917poster.jpg",
      name: "1917",
      year: "2019",
      rating: 3,
    },
    {
      image:
        "https://directdownloadlinks.net/wp-content/uploads/2018/12/Download-Fury-2014-movie.jpg",
      name: "Fury",
      year: "2014",
      rating: 4,
    },
  ]);
  return (
    <div className="App">
      <Navbar title="Movie App"></Navbar>

      <MoviesDisplay list={list}></MoviesDisplay>
      <button className="buttonadd-btn" onClick={() => setMovie(!movie)}>
        +
      </button>

      {movie ? (
        <AddMovie setList={setList} list={list} setMovie={setMovie}></AddMovie>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
