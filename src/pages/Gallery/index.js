import { Card, Carousel } from "antd";
import { useRef } from "react";
import { RightCircleOutlined, LeftCircleOutlined } from "@ant-design/icons";
import { Col, Row, Tag, Typography } from "antd";
import movieList from "../../Components/MovieList.js";

const { Text } = Typography;
const chunk = (arr, chunkSize = 1, cache = []) => {
  const tmp = [...arr];
  while (tmp.length) cache.push(tmp.splice(0, chunkSize));
  return cache;
};

const Gallery = () => {
  const chunkedMovieList = chunk(movieList, 12);
  const carouselRef = useRef(null);

  const next = () => {
    carouselRef.current.next();
  };

  const prev = () => {
    carouselRef.current.prev();
  };

  return (
    <>
      <Row justify="center">
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
          <Carousel
            ref={carouselRef}
            className="gallery"
            bordered={false}
            dots={false}
          >
            {chunkedMovieList.map((chunk, index) => (
              <div key={`chunk-${index}`}>
                <Row gutter={16}>
                  {chunk.slice(0, 6).map((movie) => (
                    <Col xs={4} sm={4} md={4} lg={4} xl={4} key={movie.id}>
                      <Card className="card">
                        <img
                          src={movie.image}
                          alt={movie.name}
                          className="poster"
                        />
                        <Text className="movieName">{movie.name}</Text>
                      </Card>
                    </Col>
                  ))}
                </Row>
                <Row gutter={16}>
                  {chunk.slice(6).map((movie) => (
                    <Col xs={4} sm={4} md={4} lg={4} xl={4} key={movie.id}>
                      <Card className="card">
                        <img
                          src={movie.image}
                          alt={movie.name}
                          className="poster"
                        />
                        <Text className="movieName">{movie.name}</Text>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            ))}
          </Carousel>
        </Col>
      </Row>
      <LeftCircleOutlined className="prevGalleryBtn" onClick={prev} />
      <RightCircleOutlined className="nextGalleryBtn" onClick={next} />
    </>
  );
};

export default Gallery;
