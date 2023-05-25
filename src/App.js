import { Layout } from "antd";

import Footer from "./Components/Footer.js";
import CarouselComponent from "./Components/Carousel.js";
import Gallery from "./Components/Gallery.js";

import "./index.css";
import backgroundVideo from "./Resources/bg_video.mp4";

const { Header, Content } = Layout;

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

      <Header className="header"></Header>
      <Content className="content">
        <Gallery />
      </Content>
      <Footer />
    </Layout>
  );
};
export default MovieCatalog;
