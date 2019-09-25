import React from 'react';
import PropTypes from 'prop-types';
import './CharacterList.scss';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';

const CharacterList = (props) => {
        const { characters, inputTextFilter,genderFilter } = props
        return (
            <div className="results-container">
                <ul className="results-list">
                    {characters
                        .filter(item => {
                            return (item.name.toUpperCase().includes(inputTextFilter.toUpperCase()));
                        })
                        .filter( item =>{
                            const genderAll = genderFilter === 'Todos';
                            const filtergender = !genderAll  ? (genderFilter === item.gender) : true;
                            return(filtergender )
                        })
                        .map(character => {
                            return (
                                <li className="item-list" key={character.id}>
                                    <Link to={`/character/${character.id}`}>
                                        <CharacterCard character={character} />
                                    </Link>
                                </li>
                            );
                        })}
                </ul>
            </div>
        );
    }

CharacterList.propTypes = {
    characters: PropTypes.arrayOf(PropTypes.object).isRequired,
    inputTextFilter: PropTypes.string.isRequired,
}

export default CharacterList;