import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import chalk from 'chalk';
import SearchBar from './components/search_bar'; //files we write needs a relative path directory
const API_KEY = 'AIzaSyBvW9Etj1HtlKwwWUoS_AsuqqjNiYdw_go';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] }

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

// Take this component's generate HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

