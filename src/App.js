import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import './style/App.css';
import SearchBar from './components/SearchBar';

const API_KEY = 'AIzaSyAsLjJsnSSVgwMXXosvN5HXCOdcELma2gM';

YTSearch({ key: API_KEY, term: 'surfboards' }, (data) => {
  console.log(data);
});

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}


export default App;
