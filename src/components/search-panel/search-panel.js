import React from "react";

import './search-panel.css';

export default class SearchPanel extends React.Component {

    state = {
        term: ''
    };

    handlerSearchChange = (e) => {
        const term = e.target.value
        this.setState({term});
        console.log( this.props)
        this.props.onSearchChange(term)
    }

    render() {
        return (
            <input
                type="text"
                className='form-control search-input'
                value={this.state.term}
                onChange={this.handlerSearchChange}
                placeholder='type to search'
            />
        );
    }
}
