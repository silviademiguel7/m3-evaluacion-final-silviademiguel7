import React from 'react';
import './App.css';
import { getData } from './services/Petition';

import Search from './components/Search';
import CardsList from './components/CardsList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      inputTextFilter: '',
    }
    this.getDataOfPetition = this.getDataOfPetition.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this)
  }
  componentDidMount() {
    this.getDataOfPetition().then(data => this.setState({ characters: data.results }))
  }
  getDataOfPetition() {
    return (getData());
  }
  handleOnChange(e) {
    const filterWord = e.currentTarget.value;
    console.log(filterWord);
    this.setState({ inputTextFilter: filterWord });
  }
  render() {
    const { inputTextFilter, characters } = this.state;
    return (
      <div className="app">
        <Search />
        <CardsList characters={characters}
          inputTextFilter={inputTextFilter}
          handleOnChange={this.handleOnChange}
        />
      </div>
    );
  }

}

export default App;
