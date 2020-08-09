import React, { Component } from 'react'
import { formatNumber } from '../../helpers/formatHelpers';

import css from './header.module.css';

export default class Header extends Component {

    handleChange = (e) => {
        this.props.onFilterChange(e.target.value);
    }

    render() {
        const { totalCountries, totalPopulation } = this.props;
        return (
            <div className={css.flexRow}>
                <input placeholder="Filtro" type="text" onChange={this.handleChange} /> |
                <span className={css.countries}>
                    <strong>Países: {totalCountries}</strong>
                </span> |
                <span className={css.population}>
                    <strong>População: {formatNumber(totalPopulation)}</strong>
                </span>
            </div>
        )
    }
}
