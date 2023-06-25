import {
  FilterOutlined,
  SearchOutlined,
  SortAscendingOutlined,
} from "@ant-design/icons";
import { Badge, Button, Card, Col, Input, Rate, Row, Tag, Tree } from "antd";
import { useState } from "react";
import movieList from "../../Components/MovieList.js";

const { TreeNode } = Tree;

const MobileMovieList = () => {
  const [searchText, setSearchText] = useState("");
  const [filterVisible, setFilterVisible] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);

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

  const handleFilterVisible = () => {
    setFilterVisible(!filterVisible);
  };

  const handleFilterChange = (checkedValues) => {
    setSelectedFilters(checkedValues);
  };

  const renderFilterTree = () => {
    return (
      <Tree
        checkable
        showLine
        defaultExpandAll
        onSelect={handleFilterChange}
        checkedKeys={selectedFilters}
      >
        <TreeNode title="Genre" key="genre">
          <TreeNode title="Action" key="action" />
          <TreeNode title="Drama" key="drama" />
          {/* Add more genre options */}
        </TreeNode>
        <TreeNode title="Type" key="type">
          <TreeNode title="Movie" key="movie" />
          <TreeNode title="TV Show" key="tvshow" />
          {/* Add more type options */}
        </TreeNode>
        <TreeNode title="Actors" key="actors">
          <TreeNode title="Actor 1" key="actor1" />
          <TreeNode title="Actor 2" key="actor2" />
          {/* Add more actor options */}
        </TreeNode>
      </Tree>
    );
  };

  return (
    <Row align="middle" justify="center">
      <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
        <div
          style={{
            marginBottom: "16px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Button icon={<SortAscendingOutlined />} style={{ marginRight: 8 }} />
          <Button
            icon={<FilterOutlined />}
            onClick={handleFilterVisible}
            style={{ marginRight: 8 }}
          />
          <Input
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            prefix={<SearchOutlined />}
            allowClear
          />
        </div>
        {filterVisible && renderFilterTree()}
        {movieList.filter(searchByName).map(renderCard)}
      </Col>
    </Row>
  );
};

export default MobileMovieList;
