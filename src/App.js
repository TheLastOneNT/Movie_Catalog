import { Layout } from "antd";

import Footer from "./Components/Footer.js";
import "./index.css";
import backgroundVideo from "./Resources/bg_video.mp4";

const { Header, Content, Background } = Layout;

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
      <Content className="content"></Content>
      <Footer />
    </Layout>
  );
};
export default MovieCatalog;
