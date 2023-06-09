import { Avatar, Segmented, Space, Card } from "antd";
import movieList from "./MovieList.js";

const Gallery = () => (
  <Card className="gallery" bordered={false}>
    {movieList.map((movie) => (
      <Card.Grid className="card" key={movie.id}>
        <img src={movie.image} alt={movie.name} className="poster" />
        <p>{movie.name}</p>
      </Card.Grid>
    ))}
  </Card>
);
export default Gallery;
