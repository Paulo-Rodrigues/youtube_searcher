import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = { term: '' };
    }

    render(){
        return(
            <div className="searchbar page-header">
                <h3>Buscar: <small>{ this.state.term }</small></h3>
                <input value={this.state.term} 
                onChange={ event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;