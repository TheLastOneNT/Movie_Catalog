import React from "react";
import { Outlet } from "react-router-dom";
import { Layout, Typography } from "antd";
import Navigation from "./Navigation";
import "./index.css";
import backgroundVideo from "./Resources/bg_video.mp4";

const { Content } = Layout;
const { Text } = Typography;

const MovieCatalog = () => {
  return (
    <Layout>
      <div className="coverImg" />
      <video
        className="bgVideo"
        src={backgroundVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      <Text className="NT">NT</Text>

      <Navigation />

      <Content className="content">
        <Outlet />
      </Content>
    </Layout>
  );
};
export default MovieCatalog;
