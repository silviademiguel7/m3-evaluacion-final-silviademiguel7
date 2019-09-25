import React from 'react';
import PropTypes from 'prop-types';
import './CharacterList.scss';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';


const CharacterList = (props) => {
        const { characters, inputTextFilter, genderFilter , specieFilter, statusFilter} = props
        return (
            <div className="results-container">
                <ul className="results-list">
                    {characters
                        .filter(item => {
                            let statusValid= true;
                           
                            if(statusFilter.length === 3 || statusFilter.length === 0){
                                statusValid = true;
                               
                            }else{
                                const indice = statusFilter.findIndex((i)=>{ return (item.status === i )});
                                if(indice === -1 ){
                                    statusValid = false;
                                }
                                else{
                                    statusValid = true;
                                }
                            }
                            const todos = (genderFilter === "Todos");
                            const filterGender = !todos ? (item.gender === genderFilter) : true;
                            const filterText = item.name.toUpperCase().includes(inputTextFilter.toUpperCase());
                            const allspecie = specieFilter === "Todos";
                            const filterSpecie = !allspecie ? (item.species === specieFilter) : true;
                            return(filterGender && filterText && filterSpecie && statusValid ) ;  
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