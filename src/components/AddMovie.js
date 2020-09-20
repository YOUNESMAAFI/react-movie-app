import React from "react";
import { Input, Button, Typography } from "antd";

const { Title } = Typography;

let newMovie = {
  name: "",
  image: "",
  year: 0,
  rating: 0,
};

const AddMovie = ({ list, setMovie }) => {
  return (
    <div className="add-movie">
      <div className="add-movie-container">
        <Title style={{ textAlign: "center", color: "#fff" }}>
          Add a new movie
        </Title>
        <br />
        Movie Name
        <Input
          size="large"
          placeholder="Movie Name"
          onChange={(e) => {
            return (newMovie = { ...newMovie, name: e.target.value });
          }}
        />
        <br />
        Movie Image
        <Input
          size="large"
          placeholder="Movie Image URL"
          onChange={(e) => {
            return (newMovie = { ...newMovie, image: e.target.value });
          }}
        />
        <br />
        Movie Year
        <Input
          size="large"
          placeholder="Movie Year"
          onChange={(e) => {
            return (newMovie = { ...newMovie, year: e.target.value });
          }}
        />
        <br />
        Movie Rating
        <Input
          size="large"
          placeholder="Movie Rating from 1 to 5"
          min={1}
          max={5}
          onChange={(e) => {
            return (newMovie = { ...newMovie, rating: e.target.value });
          }}
        />
        <br />
        <br />
        <Button
          type="danger"
          onClick={() => {
            list.push(newMovie);
            newMovie = {
              name: "",
              image: "",
              year: 0,
              rating: 0,
            };
            setMovie(false);
          }}
        >
          Add Movie
        </Button>
      </div>
    </div>
  );
};

export default AddMovie;
