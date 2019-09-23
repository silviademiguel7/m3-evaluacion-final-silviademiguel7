import React from 'react';
import PropTypes from 'prop-types';
import './CardsList.css';
import Card from './Card';
import { Link } from 'react-router-dom';

class CardsList extends React.Component {
    render() {
        const { characters,
            inputTextFilter,
        } = this.props
        return (
            <div className="results-container">
                <ul className="results-list">
                    {characters
                        .filter(item => {
                            return (item.name.toUpperCase().includes(inputTextFilter.toUpperCase()));
                        })
                        .map(character => {
                            return (
                                <li className="item-list" key={character.id}>
                                    <Link to={`/character/${character.id}`}><Card character={character} /></Link>

                                </li>
                            );
                        })}
                </ul>
            </div>

        );
    }
}

CardsList.propTypes = {
    characters: PropTypes.arrayOf(PropTypes.object).isRequired,
    inputTextFilter: PropTypes.string.isRequired,
}

export default CardsList;