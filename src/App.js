import React, { Component } from 'react';
import Countries from './components/Countries/Countries';
import Header from './components/Header/Header';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      allCountries: []
    }
  }

  async componentDidMount() {
    const res = await fetch('http://restcountries.eu/rest/v2/all');
    const json = await res.json();

    const allCountries = json.map(({ name, numericCode, population, flag }) => {
      return {
        id: numericCode,
        name,
        population,
        flag,
      };
    });

    this.setState({
      allCountries,
    })
  }

  render() {
    const { allCountries } = this.state;

    return (
      <div className="container">
        <h1>React components</h1>
        <Header/>
        <Countries countries={allCountries}/>
      </div>
    )
  }
}
