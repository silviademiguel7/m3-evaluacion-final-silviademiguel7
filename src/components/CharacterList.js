import React from 'react';
import PropTypes from 'prop-types';
import './CharacterList.scss';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';

class CharacterList extends React.Component {
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
                                    <Link to={`/character/${character.id}`}><CharacterCard character={character} /></Link>

                                </li>
                            );
                        })}
                </ul>
            </div>
        );
    }
}

CharacterList.propTypes = {
    characters: PropTypes.arrayOf(PropTypes.object).isRequired,
    inputTextFilter: PropTypes.string.isRequired,
}

export default CharacterList;