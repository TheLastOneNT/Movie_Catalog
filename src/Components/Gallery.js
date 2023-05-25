import { Avatar, Segmented, Space } from "antd";
import movieList from "./MovieList.js";

const Gallery = () => (
  <Space direction="vertical">
    <Segmented
      className="gallery"
      options={[
        {
          label: (
            <div className="galleryItem">
              <Avatar src={movieList.img1} className="galleryImg" />
              <div>Неисправимый Рон</div>
            </div>
          ),
          value: "movie1",
        },
        {
          label: (
            <div className="galleryItem">
              <Avatar src={movieList.img2} className="galleryImg" />
              <div>Как приручить дракона</div>
            </div>
          ),
          value: "movie2",
        },
        {
          label: (
            <div className="galleryItem">
              <Avatar src={movieList.img3} className="galleryImg" />
              <div>Как приручить дракона 2</div>
            </div>
          ),
          value: "movie3",
        },
        {
          label: (
            <div className="galleryItem">
              <Avatar src={movieList.img4} className="galleryImg" />
              <div>Как приручить дракона 3</div>
            </div>
          ),
          value: "movie4",
        },
        {
          label: (
            <div className="galleryItem">
              <Avatar src={movieList.img5} className="galleryImg" />
              <div>В поисках Немо</div>
            </div>
          ),
          value: "movie5",
        },
        {
          label: (
            <div className="galleryItem">
              <Avatar src={movieList.img6} className="galleryImg" />
              <div>В поисках Дори</div>
            </div>
          ),
          value: "movie6",
        },
      ]}
    />
  </Space>
);
export default Gallery;
