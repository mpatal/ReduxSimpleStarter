import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'; //files we write needs a relative path directory

const API_KEY = 'AIzaSyBvW9Etj1HtlKwwWUoS_AsuqqjNiYdw_go'

// Create a new component. This component should produce some HTML
// on component for file

//ES 6 const 
const App = () => {
    return  (
        <div>
            <SearchBar/>
        </div> 
    );
}

// Take this component's generate HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

