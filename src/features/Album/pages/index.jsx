import PropTypes from "prop-types";
import AlbumList from "../components/AlbumList";

AlbumFeature.prototype = {};

function AlbumFeature(prods) {
  const albumList = [
    {
      id: 1,
      title: "Album 1",
      thumbnailAlbum:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/2/2/e/1/22e1d0d9db7bd91ced3a2a64674e8e8d.jpg",
    },
    {
      id: 2,
      title: "Album 2",
      thumbnailAlbum:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/e/d/9/6/ed96a5d223eef8d76e0dab918995831a.jpg",
    },
    {
      id: 3,
      title: "Album 3",
      thumbnailAlbum:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/d/e/c/6/dec67b31b00cc3339f10d90498411fd6.jpg",
    },
  ];

  return (
    <div>
      <h3>Có thể bạn thích đấy!!!</h3>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
