import {
  BarChartOutlined,
  FilterOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import {
  Badge,
  Button,
  Card,
  Col,
  Input,
  Rate,
  Row,
  Tag,
  TreeSelect,
} from "antd";
import { useCallback, useEffect, useState } from "react";

const MobileMovieList = () => {
  const [searchText, setSearchText] = useState("");
  const [filterVisible, setFilterVisible] = useState(false);
  const [selectedMovieTypes, setSelectedMovieTypes] = useState([]);
  const [sortAscending, setSortAscending] = useState(true);
  const [sortedMovieList, setSortedMovieList] = useState([]);
  const [movieList, setMovieList] = useState([]);

  const fetchMovies = async () => {
    const response = await fetch("http://localhost:3000/movie-catalog");
    const data = await response.json();
    console.log("::::::::", data);
    setMovieList(data);
  };

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
      <Badge.Ribbon
        text={movie.type}
        style={{ marginTop: "40px" }}
        key={movie.id}
      >
        <Card title={movie.name} style={{ margin: "16px auto" }} size="small">
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

  const sortMovieList = useCallback(() => {
    const sortedList = Array.from(movieList).sort((a, b) => {
      const durationA = convertDurationToMinutes(a.duration);
      const durationB = convertDurationToMinutes(b.duration);

      return sortAscending ? durationA - durationB : durationB - durationA;
    });

    setSortedMovieList(sortedList);
  }, [sortAscending, movieList]);

  const convertDurationToMinutes = (duration) => {
    const durationParts = duration.match(/\d+/g);
    if (durationParts.length === 2) {
      const hours = parseInt(durationParts[0], 10);
      const minutes = parseInt(durationParts[1], 10);
      return hours * 60 + minutes;
    } else if (durationParts.length === 1) {
      return parseInt(durationParts[0], 10);
    }
    return 0;
  };

  const movieTypeTreeData = [
    {
      title: "Movie",
      value: "Movie",
      key: "Movie",
    },
    {
      title: "Cartoon",
      value: "Cartoon",
      key: "Cartoon",
    },
    {
      title: "Serial",
      value: "Serial",
      key: "Serial",
    },
  ];

  const handleMovieTypeChange = (selectedTypes) => {
    setSelectedMovieTypes(selectedTypes);
  };

  useEffect(() => {
    sortMovieList();
  }, [sortAscending, sortMovieList]);

  useEffect(() => {
    fetchMovies();
  }, []);

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
          <Button
            icon={<BarChartOutlined />}
            onClick={() => setSortAscending(!sortAscending)}
            style={{ marginRight: "8px" }}
          />

          {/* TreeSelect component for movie type filter */}
          <TreeSelect
            showSearch
            style={{ width: 44, marginRight: "8px" }} // Adjust the width to fit the icon
            value={selectedMovieTypes}
            dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
            placeholder="Select Movie Types"
            allowClear
            multiple
            treeDefaultExpandAll
            onChange={handleMovieTypeChange}
            treeData={movieTypeTreeData}
          />

          <Button
            icon={<FilterOutlined />}
            onClick={() => setFilterVisible(!filterVisible)}
            style={{ marginRight: "8px" }}
          />
          <Input
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            prefix={<SearchOutlined />}
            allowClear
            style={{ flex: 1 }}
          />
        </div>
        {sortedMovieList
          .filter(searchByName)
          .filter(
            (movie) =>
              selectedMovieTypes.length === 0 ||
              selectedMovieTypes.includes(movie.type)
          )
          .map(renderCard)}
      </Col>
    </Row>
  );
};

export default MobileMovieList;
