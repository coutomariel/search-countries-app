import React, { Component } from 'react'

export default class Country extends Component {
    render() {
        const { name } = this.props.country;

        return (
            <div>
                {name}
            </div>
        )
    }
}
