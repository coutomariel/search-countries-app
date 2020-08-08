import React, { Component } from 'react';
import Countries from './components/Countries/Countries';
import Header from './components/Header/Header';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      allCountries: [],
      filter: '',
      filteredCountries: [],
    }
  }

  async componentDidMount() {
    const res = await fetch('http://restcountries.eu/rest/v2/all');
    const json = await res.json();

    const allCountries = json.map(({ name, numericCode, population, flag }) => {
      return {
        id: numericCode,
        name,
        filteredName: name.toLowerCase(),
        population,
        flag,
      };
    });

    this.setState({
      allCountries,
      filteredCountries: Object.assign([], allCountries),
    })
  }

  onFilterChange = (textFilter) => {
    this.setState({
      filter: textFilter,
    });

    const filterToLowerCase = textFilter.toLowerCase();

    const filteredCountries = this.state.allCountries
      .filter((country) => {
        return country.filteredName.includes(filterToLowerCase);
      })

    this.setState({
      filteredCountries,
    });

  }

  render() {
    const { filteredCountries } = this.state;

    return (
      <div className="container">
        <h1>React components</h1>
        <Header onFilterChange={this.onFilterChange} />
        <Countries countries={filteredCountries} />
      </div>
    )
  }
}
