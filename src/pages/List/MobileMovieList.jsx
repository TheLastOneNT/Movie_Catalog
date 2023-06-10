import { Card, Button, Select, Input, Rate, Tag, Row, Col } from "antd";
import { SearchOutlined } from "@ant-design/icons";
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
    const actorColors = [
      "blue",
      "purple",
      "red",
      "volcano",
      "green",
      "orange",
      "geekblue",
      "cyan",
      "gold",
      "lime",
      "#f50",
      "#2db7f5",
      "#87d068",
    ];
    return (
      <Card title={movie.name} style={{ margin: "16px 0" }} key={movie.key}>
        <p>{movie.genre && renderTags(movie.genre, genreColors)}</p>
        <p>{movie.type}</p>
        <p>{movie.year}</p>
        <Rate
          allowHalf
          disabled
          count={5}
          value={parseFloat(movie.rating)}
          style={{ fontSize: "14px" }}
        />
        <p>{movie.duration}</p>
        <p>{movie.actors && renderTags(movie.actors, actorColors)}</p>
      </Card>
    );
  };

  return (
    <Row align="middle" justify="center">
      <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
        <div style={{ marginBottom: 16 }}>
          <Button
          // onClick...
          // add functionality for sorting/filtering/searching buttons
          >
            Sort
          </Button>
          <Button
          // onClick...
          >
            Filter
          </Button>
          <Input
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value || "")}
            style={{ width: 188, marginBottom: 8, display: "block" }}
          />
        </div>
        {movieList.filter(searchByName).map(renderCard)}
      </Col>
    </Row>
  );
};

export default MobileMovieList;
