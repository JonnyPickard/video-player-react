import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import './style/App.css';
import SearchBar from './components/SearchBar';

const API_KEY = 'AIzaSyAsLjJsnSSVgwMXXosvN5HXCOdcELma2gM';

class App extends Component {
  constructor() {
    super();
    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}


export default App;
