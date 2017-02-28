import React, { Component } from 'react'; //es6 syntactic sugar equivalent to const Component = React.Component much like namespacing on a dotted notation

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' }; //only in constructor we can initialize it like this
    }

    render() {
        //must deefine render otherwise an error occurs
        //functional vs class based component
        return (
            <div>
                <input 
                    value={this.state.term}
                    onChange={event => this.setState({ term: event.target.value })} />
            </div>
        );
    }


}

export default SearchBar; //es6 ability to export from a silo everything in es6 class is private unless exported

