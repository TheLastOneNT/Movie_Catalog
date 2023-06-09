import { Card, Carousel } from "antd";
import { useRef } from "react";
import { RightCircleOutlined, LeftCircleOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import movieList from "./MovieList.js";

const chunk = (arr, chunkSize = 1, cache = []) => {
  const tmp = [...arr];
  while (tmp.length) cache.push(tmp.splice(0, chunkSize));
  return cache;
};

const Gallery = () => {
  const chunkedMovieList = chunk(movieList, 14);
  const carouselRef = useRef(null);

  const next = () => {
    carouselRef.current.next();
  };

  const prev = () => {
    carouselRef.current.prev();
  };

  return (
    <Row>
      <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={3}>
        <Carousel ref={carouselRef} className="gallery" bordered={false}>
          {chunkedMovieList.map((chunk, index) => (
            <Card
              className="carouselCard"
              key={`chunk-${index}`}
              bordered={false}
            >
              {chunk.map((movie) => (
                <Card.Grid className="card" key={movie.id}>
                  <img src={movie.image} alt={movie.name} className="poster" />
                  <p>{movie.name}</p>
                </Card.Grid>
              ))}
            </Card>
          ))}
        </Carousel>

        <LeftCircleOutlined className="prevGalleryBtn" onClick={prev} />
        <RightCircleOutlined className="nextGalleryBtn" onClick={next} />
      </Col>
    </Row>
  );
};

export default Gallery;
