import { Input, Space, Button, Table, Tag } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import movieList from "../../Components/MovieList.js";
import { useEffect, useState } from "react";

const MovieList = () => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setFilteredInfo({});
    setSortedInfo({});
  }, [searchText]);

  const handleChange = (pagination, filters, sorter) => {
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const searchByName = (record) => {
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
          <Button onClick={clearFilters} size="small" style={{ width: 90 }}>
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

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      sorter: (a, b) => a.id - b.id,
      sortOrder: sortedInfo.columnKey === "id" && sortedInfo.order,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      ...getColumnSearchProps("name", setSearchText),
    },
    {
      title: "Genre",
      dataIndex: "genre",
      key: "genre",
      filters: [
        { text: "Drama", value: "Drama" },
        { text: "Crime", value: "Crime" },
      ],
      filteredValue: filteredInfo.genre || null,
      onFilter: (value, record) => record.genre && record.genre.includes(value),
      render: (genre) => {
        let color = "blue";
        if (genre === "Historical") color = "volcano";
        if (genre === "Christian") color = "green";
        if (genre === "Fantasy") color = "volcano";
        if (genre === "Comedy") color = "green";
        if (genre === "Documentary") color = "green";
        return (
          <Tag color={color} key={genre}>
            {genre && genre.toUpperCase()}
          </Tag>
        );
      },
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
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
      sorter: (a, b) => a.year - b.year,
      sortOrder: sortedInfo.columnKey === "year" && sortedInfo.order,
    },
    {
      title: "Rating Niko",
      dataIndex: "ratingN",
      key: "ratingN",
    },
    {
      title: "Rating Teo",
      dataIndex: "ratingT",
      key: "ratingT",
    },
    {
      title: "Movie Duration",
      dataIndex: "duration",
      key: "duration",
    },
    {
      title: "Actors",
      dataIndex: "actors",
      key: "actors",
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
        let color;
        if (!actors) return null;
        if (actors === "Al Pacino") color = "blue";
        if (actors === "Denzel Washington") color = "green";
        if (actors === "Leonardo DiCaprio") color = "green";
        if (actors === "Brad Pitt") color = "green";
        if (actors === "Jim Carrey") color = "green";
        if (actors === "Tom Cruise") color = "green";
        if (actors === "Robert De Niro") color = "green";
        if (actors === "Robert Downey Jr") color = "green";
        if (actors === "Will Smith") color = "green";
        if (actors === "Matthew McConaughey") color = "green";
        if (actors === "Matt Damon") color = "green";
        if (actors === "Mark Wahlberg") color = "green";
        if (actors === "Mel Gibson") color = "green";
        return (
          <Tag color={color} key={actors}>
            {actors && actors.toUpperCase()}
          </Tag>
        );
      },
    },
  ];

  return (
    <div>
      {/*       <input
        type="text"
        placeholder="Search by name"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      /> */}
      <Table
        className="table"
        columns={columns}
        dataSource={movieList.filter(searchByName)}
        onChange={handleChange}
      />
    </div>
  );
};

export default MovieList;
