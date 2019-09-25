import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import { getData } from './services/Petition';
import Header from './components/Header';
import Landing from './components/Landing';
import CharacterDetail from './components/CharacterDetail';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      inputTextFilter: '',
      genderFilter:'Todos',
    }
    this.getDataOfPetition = this.getDataOfPetition.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.filterByGender = this.filterByGender.bind(this);
  }
  componentDidMount() {
    this.getDataOfPetition().then(data => this.setState({ characters: data.results }));
  }
  getDataOfPetition() {
    return (getData());
  }
  handleOnChange(e) {
    const filterWord = e.currentTarget.value;
    this.setState({ inputTextFilter: filterWord });
  }
  filterByGender(e){
    const gender = e.currentTarget.value;
    this.setState({genderFilter : gender});
  }
  render() {
    const { inputTextFilter, characters, genderFilter } = this.state;
    return (
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <Landing
                characters={characters}
                inputTextFilter={inputTextFilter}
                handleOnChange={this.handleOnChange}
                filterByGender={this.filterByGender}
                genderFilter={genderFilter} />
            );
          }} />
          <Route path="/character/:id" render={(routerProps) => {
            return (
              <CharacterDetail
                id={routerProps.match.params.id}
                characters={characters}
                 />
            );
          }} />
        </Switch>
      </div>
    );
  }
}

export default App;
