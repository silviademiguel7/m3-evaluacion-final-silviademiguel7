import React from 'react';
import PropTypes from 'prop-types';
import './Filters.scss';


class Filters extends React.Component{
    render(){
        const {handleOnChange,inputTextFilter}=this.props;
        return(
            <div className="search-container__filterInput">
            <label htmlFor="inputText"></label>
            <input type="text" 
            className="input"
            name="inputText" id="inputText" placeholder="Filtra por nombre" onChange={handleOnChange} value={inputTextFilter} />
        </div>
        );
    }
}
Filters.propTypes = {
    inputTextFilter: PropTypes.string.isRequired,
    handleOnChange: PropTypes.func.isRequired,
}

export default Filters;