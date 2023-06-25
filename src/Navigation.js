import { Col, Menu, Row } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const items = [
  /*   {
    label: <Link to="/gallery">Gallery</Link>,
    key: "gallery",
  }, */
  {
    label: <Link to="/list">List</Link>,
    key: "list",
  },
];

export default function Navigation() {
  const [current, setCurrent] = useState();

  const onClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <Row justify="center" className="header">
      <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={3}>
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
          className="menu"
        />
      </Col>
    </Row>
  );
}
