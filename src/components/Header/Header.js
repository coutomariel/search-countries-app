import React, { Component } from 'react'

export default class Header extends Component {

    handleChange = (e) => {
        this.props.onFilterChange(e.target.value);
    }

    render() {
        const { totalCountries, totalPopulation } = this.props;
        return (
            <>
                <input type="text" onChange={this.handleChange} />
                |<span>Países: {totalCountries}</span>
                |<span>População: {totalPopulation}</span>
            </>
        )
    }
}
