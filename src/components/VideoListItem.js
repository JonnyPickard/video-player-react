import React from 'react';
import { PropTypes } from 'prop-types';

const VideoListItem = ({ video }) => {
  const { snippet } = video;
  const { title } = snippet;

  return (
    <li>{title}</li>
  );
};

VideoListItem.propTypes = {
  video: PropTypes.object.isRequired,
};

export default VideoListItem;
