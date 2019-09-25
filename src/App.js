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
      specieFilter:'Todos',
      statusFilter:[],
    }
    this.getDataOfPetition = this.getDataOfPetition.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.FilterByGender = this.FilterByGender.bind(this);
    this.FilterBySpecie = this.FilterBySpecie.bind(this);
    this.FilterByStatus = this.FilterByStatus.bind(this);
    }
  componentDidMount() {
    this.getDataOfPetition().then(data => this.setState({ characters: data.results }));
  }
  getDataOfPetition() {
    return (getData());
  }
  handleOnChange(e) {
    const filterWord = e.currentTarget.value;
    console.log(filterWord);
    this.setState({ inputTextFilter: filterWord });
  }
  FilterByGender(e){
    const gender = e.currentTarget.value;
    console.log(gender);
    this.setState({genderFilter:gender})
  }
  FilterBySpecie(e){
    const specie = e.currentTarget.value;
    this.setState({specieFilter: specie},()=>{console.log(this.state.specieFilter)});
    ;
  }
  FilterByStatus(e){
    const status = e.currentTarget.value;
    this.setState((prevState)=>{
      const statusFilterNew = [...prevState.statusFilter];
      const indice = statusFilterNew.findIndex((item)=> item === status );
      if(indice === -1){
        statusFilterNew.push(status)
      }else{
        statusFilterNew.splice(indice,1);
      }
      return {statusFilter: statusFilterNew} 
      
    },()=>{console.log(this.state.statusFilter)})
  }
  render() {
    const { inputTextFilter, characters ,genderFilter, specieFilter, statusFilter} = this.state;
    return (
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <Landing
                characters={characters}
                inputTextFilter={inputTextFilter}
                genderFilter={genderFilter}
                FilterByGender={this.FilterByGender}
                handleOnChange={this.handleOnChange}
                specieFilter={specieFilter}
                FilterBySpecie={this.FilterBySpecie}
                statusFilter={statusFilter}
                FilterByStatus={this.FilterByStatus}
                 />
            );
          }} />
          <Route path="/character/:id" render={(routerProps) => {
            return (
              <CharacterDetail
                id={routerProps.match.params.id}
                characters={characters} />
            );
          }} />
        </Switch>
      </div>
    );
  }
}

export default App;
