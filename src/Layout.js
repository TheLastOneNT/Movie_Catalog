import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import Navigation from "./Navigation";
import Footer from "./Components/Footer.js";
import "./index.css";
import backgroundVideo from "./Resources/bg_video.mp4";

const { Content } = Layout;

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

      <Navigation />

      <Content className="content">
        <Outlet />
      </Content>

      <Footer />
    </Layout>
  );
};
export default MovieCatalog;
