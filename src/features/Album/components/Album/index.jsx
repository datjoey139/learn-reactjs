import React from "react";
import PropTypes from "prop-types";

Album.propTypes = {
  album: PropTypes.object.isRequired,
};

function Album({ album }) {
  return (
    <div className="album">
      <div className="ablum__thumbnail"></div>
      <img src={album.thumbnailAlbum} alt="album.thumbnailAlbum" />

      <p className="album__name">{album.title}</p>
    </div>
  );
}

export default Album;
