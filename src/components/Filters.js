import React from 'react';


class Filters extends React.Component{
    render(){
        const {handleOnChange,inputTextFilter}=this.props;
        return(
            <div className="search-container__filterInput">
            <label htmlFor="inputText"></label>
            <input type="text" name="inputText" id="inputText" placeholder="Filtra por nombre" onChange={handleOnChange} value={inputTextFilter} />
        </div>
        );
    }
}
export default Filters;