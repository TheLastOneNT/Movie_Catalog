import { Tag, Table, Input } from "antd";
import movieList from "../../Components/MovieList.js";
import chroma from "chroma-js";
import { useEffect, useState } from "react";

const currentYear = new Date().getFullYear();
const startYear = 1960;
const endYear = currentYear;

const colorScale = chroma
  .scale([
    "#808080",
    "#A0A0A0",
    "#C0C0C0",
    "#DCDCDC",
    "#90EE90",
    "#32CD32",
    "#00FF00",
  ])
  .domain([startYear, endYear]);

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
      onFilter: (value, record) => searchByName(record),
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
      onFilter: (value, record) => record.genre.includes(value),
      render: (genre) => {
        let color = "blue";
        if (genre === "Drama") color = "volcano";
        if (genre === "Crime") color = "green";
        return (
          <Tag color={color} key={genre}>
            {genre.toUpperCase()}
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
      onFilter: (value, record) => record.type.includes(value),
      render: (type) => {
        let color = "blue";
        if (type === "Movie") color = "volcano";
        if (type === "Series") color = "green";

        return (
          <Tag color={color} key={type}>
            {type.toUpperCase()}
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
      render: (year) => (
        <Tag color={colorScale(year).hex()} key={year}>
          {year}
        </Tag>
      ),
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
  ];

  return (
    <div>
      {/*       <Input.Search
        placeholder="Search by name"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      /> */}
      <Table
        columns={columns}
        dataSource={movieList.filter(searchByName)}
        onChange={handleChange}
      />
    </div>
  );
};

export default MovieList;
