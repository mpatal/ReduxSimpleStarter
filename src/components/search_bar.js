import React, { Component } from 'react'; //es6 syntactic sugar equivalent to const Component = React.Component much like namespacing on a dotted notation

class SearchBar extends Component {

    render () {
        //must deefine render otherwise an error occurs
        //functional vs class based component
        return (
            <input onChange={event =>  console.log(event.target.value) }/>
        );
    }

    
}

export default SearchBar; //es6 ability to export from a silo everything in es6 class is private unless exported

