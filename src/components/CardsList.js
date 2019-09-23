import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardsList extends React.Component {
    render() {
        const {characters,
            inputTextFilter,
            handleOnChange,  
        }=this.props
        return (
            <main>
                <div className="search-container__filterInput">
                    <label htmlFor="inputText"></label>
                    <input type="text" name="inputText" id="inputText" placeholder="Filtra por nombre" onChange={handleOnChange} value={inputTextFilter} />
                </div>
                <div className="results-container">
                    <ul>
                        {characters
                            .filter(item => {
                                return (item.name.toUpperCase().includes(inputTextFilter.toUpperCase()));
                            })
                            .map(character => {
                                return (
                                    <li className="item-list" key={character.id}>
                                        <Card character={character}/>
                                        
                                    </li>
                                );
                            })}
                    </ul>
                </div>
            </main>
        );
    }
}

CardsList.propTypes={
    characters: PropTypes.arrayOf(PropTypes.object).isRequired,
    inputTextFilter: PropTypes.string.isRequired,
    handleOnChange: PropTypes.func.isRequired
}

export default CardsList;