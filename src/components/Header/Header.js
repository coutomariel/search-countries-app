import React, { Component } from 'react'

export default class Header extends Component {

    handleChange = (e) => {
        this.props.onFilterChange(e.target.value);
    }
    
    render() {
        return (
            <>
                <input type="text" onChange={this.handleChange} />
                |<span>Países</span>
                |<span>População</span>
            </>
        )
    }
}
