import React from 'react';
import { PropTypes } from 'prop-types';
import VideoListItem from './VideoListItem';

const VideoList = (props) => {
  const videoItems = props.videos.map(video =>
    (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        video={video}
        key={video.etag}
      />
    ),
  );

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

VideoList.propTypes = {
  videos: PropTypes.array,
  onVideoSelect: PropTypes.func.isRequired,
};

VideoList.defaultProps = {
  videos: [],
};

export default VideoList;
