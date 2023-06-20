import { Input, Space, Button, Table, Tag, Row, Col, Rate } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import movieList from "../../Components/MovieList.js";
import { useEffect, useState } from "react";

const DesktopMovieList = () => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [searchText, setSearchText] = useState("");

  const handleChange = (pagination, filters, sorter) => {
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const searchByName = (record) => {
    if (searchText === "") {
      return true;
    }
    return record.name.toLowerCase().includes(searchText.toLowerCase());
  };

  const getColumnSearchProps = (dataIndex, setSearchText) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => {
            setSelectedKeys(e.target.value ? [e.target.value] : []);
            setSearchText(e.target.value || "");
          }}
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            onClick={() => {
              clearFilters();
              setSearchText("");
            }}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    render: (text) => text,
  });

  const convertDurationToMinutes = (duration) => {
    const [hours, minutes] = duration.split("h ");
    return parseInt(hours) * 60 + parseInt(minutes.replace("min", ""));
  };

  useEffect(() => {
    setFilteredInfo({});
    setSortedInfo({});
  }, [searchText]);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "25vw",
      ...getColumnSearchProps("name", setSearchText),
      sorter: (a, b) => a.name.localeCompare(b.name),
      sortOrder: sortedInfo.columnKey === "name" && sortedInfo.order,
    },
    {
      title: "Genre",
      dataIndex: "genre",
      key: "genre",
      align: "center",
      width: "15vw",
      filters: [
        { text: "Historical", value: "Historical" },
        { text: "Christian", value: "Christian" },
        { text: "Fantasy", value: "Fantasy" },
        { text: "Comedy", value: "Comedy" },
        { text: "Documentary", value: "Documentary" },
        { text: "Action", value: "Action" },
        { text: "Cartoon", value: "Cartoon" },
        { text: "Drama", value: "Drama" },
      ],
      filteredValue: filteredInfo.genre || null,
      onFilter: (value, record) => record.genre && record.genre.includes(value),
      render: (genres) => {
        if (!genres || genres.length === 0) return null;
        return (
          <>
            {genres.map((genre) => {
              let color;
              if (!genre) return null;
              if (genre === "Historical") color = "purple";
              if (genre === "Christian") color = "red";
              if (genre === "Fantasy") color = "volcano";
              if (genre === "Comedy") color = "green";
              if (genre === "Documentary") color = "orange";
              if (genre === "Action") color = "geekblue";
              if (genre === "Cartoon") color = "cyan";
              if (genre === "Drama") color = "gold";
              return (
                <Tag color={color} key={genre}>
                  {genre && genre.toUpperCase()}
                </Tag>
              );
            })}
          </>
        );
      },
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      align: "center",
      filters: [
        { text: "Movie", value: "Movie" },
        { text: "Cartoon", value: "Cartoon" },
        { text: "Series", value: "Series" },
      ],
      filteredValue: filteredInfo.type || null,
      onFilter: (value, record) => record.type && record.type.includes(value),
      render: (type) => {
        let color = "blue";
        if (type === "Movie") color = "volcano";
        if (type === "Series") color = "green";

        return (
          <Tag color={color} key={type}>
            {type && type.toUpperCase()}
          </Tag>
        );
      },
    },
    {
      title: "Year",
      dataIndex: "year",
      key: "year",
      align: "center",
      width: "5vw",
      sorter: (a, b) => a.year - b.year,
      sortOrder: sortedInfo.columnKey === "year" && sortedInfo.order,
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
      align: "center",
      sorter: (a, b) => parseFloat(a.rating) - parseFloat(b.rating),
      sortOrder: sortedInfo.columnKey === "rating" && sortedInfo.order,
      render: (rating, record, index) => {
        const isSorted = sortedInfo.columnKey === "rating";
        const isActiveSortColumn = isSorted && sortedInfo.order !== undefined;
        const starCount = parseFloat(rating);

        return (
          <div>
            {isActiveSortColumn ? (
              <Rate
                allowHalf
                disabled
                count={5}
                value={starCount}
                style={{ fontSize: "14px" }}
              />
            ) : (
              <Rate
                allowHalf
                disabled
                count={5}
                value={starCount}
                style={{ fontSize: "14px" }}
              />
            )}
          </div>
        );
      },
    },
    {
      title: "Duration",
      dataIndex: "duration",
      key: "duration",
      align: "center",
      sorter: (a, b) => {
        const durationA = convertDurationToMinutes(a.duration);
        const durationB = convertDurationToMinutes(b.duration);
        return durationA - durationB;
      },
      sortOrder: sortedInfo.columnKey === "duration" && sortedInfo.order,
    },
    {
      title: "Actors",
      dataIndex: "actors",
      key: "actors",
      align: "center",
      width: "15vw",
      filters: [
        { text: "Al Pacino", value: "Al Pacino" },
        { text: "Denzel Washington", value: "Denzel Washington" },
        { text: "Leonardo DiCaprio", value: "Leonardo DiCaprio" },
        { text: "Brad Pitt", value: "Brad Pitt" },
        { text: "Jim Carrey", value: "Jim Carrey" },
        { text: "Tom Cruise", value: "Tom Cruise" },
        { text: "Robert De Niro", value: "Robert De Niro" },
        { text: "Robert Downey Jr", value: "Robert Downey Jr" },
        { text: "Will Smith", value: "Will Smith" },
        { text: "Matthew McConaughey", value: "Matthew McConaughey" },
        { text: "Matt Damon", value: "Matt Damon" },
        { text: "Mark Wahlberg", value: "Mark Wahlberg" },
        { text: "Mel Gibson", value: "Mel Gibson" },
      ],
      filteredValue: filteredInfo.actors || null,
      onFilter: (value, record) =>
        record.actors && record.actors.includes(value),
      render: (actors) => {
        if (!actors || actors.length === 0) return null;

        const actorsArray = actors[0].split(", ");

        return (
          <>
            {actorsArray.map((actor) => {
              let color = "black";
              if (actor === "Al Pacino") color = "blue";
              else if (actor === "Denzel Washington") color = "purple";
              else if (actor === "Leonardo DiCaprio") color = "red";
              else if (actor === "Brad Pitt") color = "volcano";
              else if (actor === "Jim Carrey") color = "green";
              else if (actor === "Tom Cruise") color = "orange";
              else if (actor === "Robert De Niro") color = "#5A4171";
              else if (actor === "Robert Downey Jr") color = "cyan";
              else if (actor === "Will Smith") color = "gold";
              else if (actor === "Matthew McConaughey") color = "lime";
              else if (actor === "Matt Damon") color = "#f50";
              else if (actor === "Mark Wahlberg") color = "#2db7f5";
              else if (actor === "Mel Gibson") color = "#87d068";
              else if (actor === "Keanu Reeves") color = "#B88E8D";
              else if (actor === "Adriano Celentano") color = "#79C0A6";
              return (
                <Tag color={color} key={actor}>
                  {actor && actor.toUpperCase()}
                </Tag>
              );
            })}
          </>
        );
      },
    },
  ];

  return (
    <Row align="middle" justify="center">
      <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
        <Table
          className="table"
          columns={columns}
          dataSource={movieList.filter(searchByName)}
          onChange={handleChange}
          pagination={false}
          scroll={{ y: 610 }}
          size="small"
        />
      </Col>
    </Row>
  );
};

export default DesktopMovieList;
