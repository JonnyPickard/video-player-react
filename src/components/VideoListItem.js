import React from 'react';
import { PropTypes } from 'prop-types';

const VideoListItem = ({ video }) => {
  const { snippet } = video;
  const { title, thumbnails } = snippet;
  const { url } = thumbnails.default;

  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={url} alt="" />
        </div>

        <div className="media-body">
          <div className="media-heading">{title}</div>
        </div>
      </div>

    </li>
  );
};

VideoListItem.propTypes = {
  video: PropTypes.object.isRequired,
};

export default VideoListItem;
