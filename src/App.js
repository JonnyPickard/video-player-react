import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import './style/App.css';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const API_KEY = 'AIzaSyAsLjJsnSSVgwMXXosvN5HXCOdcELma2gM';

class App extends Component {
  constructor() {
    super();

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0],
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
