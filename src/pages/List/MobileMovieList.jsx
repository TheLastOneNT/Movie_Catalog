import { Card, Button, Input, Rate, Tag, Row, Col, Badge } from "antd";
import movieList from "../../Components/MovieList.js";
import { useState } from "react";

const MobileMovieList = () => {
  const [searchText, setSearchText] = useState("");

  const searchByName = (record) => {
    if (searchText === "") {
      return true;
    }
    return record.name.toLowerCase().includes(searchText.toLowerCase());
  };

  const renderTags = (items, colors) => {
    return items.map((item, index) => (
      <Tag color={colors[index % colors.length]} key={item}>
        {item.toUpperCase()}
      </Tag>
    ));
  };

  const renderCard = (movie) => {
    const genreColors = [
      "purple",
      "red",
      "volcano",
      "green",
      "orange",
      "geekblue",
      "cyan",
      "gold",
    ];

    return (
      <Badge.Ribbon text={movie.type} style={{ marginTop: "40px" }}>
        <Card
          title={movie.name}
          style={{ margin: "16px auto" }}
          key={movie.key}
          size="small"
        >
          <Rate
            allowHalf
            disabled
            value={parseFloat(movie.rating)}
            style={{ fontSize: "14px" }}
          />
          <p>{movie.year}</p>
          <p>{movie.duration}</p>
          <p>{movie.genre && renderTags(movie.genre, genreColors)}</p>
        </Card>
      </Badge.Ribbon>
    );
  };

  const handleResetSearch = () => {
    setSearchText("");
  };

  return (
    <Row align="middle" justify="center">
      <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
        <div style={{ marginBottom: 16 }}>
          <Button style={{ width: "40%" }}>Sort</Button>
          <Button style={{ width: "40%" }}>Filter</Button>
          <Input
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{ width: "100%", marginBottom: 8, display: "block" }}
          />
          {searchText && <Button onClick={handleResetSearch}>Reset</Button>}
        </div>
        {movieList.filter(searchByName).map(renderCard)}
      </Col>
    </Row>
  );
};

export default MobileMovieList;
