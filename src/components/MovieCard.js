import React from "react";
import { Card } from "antd";
import { Rate } from "antd";
const { Meta } = Card;

const MovieCard = ({ elem }) => {
  return (
    <div className="movie-card">
      <Card
        hoverable
        style={{ width: 300, height: 600, margin: 20 }}
        cover={<img alt="example" src={elem.image} />}
      >
        <Meta title={elem.name} description={elem.year} />
        <Rate defaultValue={elem.rating} />
      </Card>
    </div>
  );
};

export default MovieCard;
