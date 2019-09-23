import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { getData } from './services/Petition';
import Header from './components/Header';
import Landing from './components/Landing';
import Detail from './components/Detail';

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
        <Header/>
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <Landing
                characters={characters}
                inputTextFilter={inputTextFilter}
                handleOnChange={this.handleOnChange} />
            );
          }} />
          <Route path="/character/:id" render={(routerProps) => {
            return (
              <Detail id={routerProps.match.params.id} characters={characters} />
            );
          }} />
        </Switch>

      </div>
    );
  }

}

export default App;
