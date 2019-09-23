import React from 'react';
import logo from '../images/title-logo.png';

class Search extends React.Component{
    render(){
        return(
            <header className="header">
            <h1 className="tittle-pagpe"><img src={logo} alt="titulo de la pagina" /></h1>
          </header>
        );
    }
}
export default Search;