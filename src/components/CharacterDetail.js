import React from 'react';
import PropTypes from 'prop-types';
import './CharacterDetail.css';
import { Link } from 'react-router-dom';


class CharacterDetail extends React.Component {
    render() {
        const { id, characters } = this.props;
        const character = characters.find(character => {
            return (character.id === parseInt(id));
        });
        const episodes = character.episode.length;

        return (
            <div className="container-detail">
                <Link to="/"><div className="return">Volver</div></Link>
                <div className="container-detail__image">
                    <img src={character.image} alt={`imagen de ${character.name}`} />
                </div>
                <ul>
                    <li className="">Nombre: {character.name}</li>
                    <li className="">Status:{character.status}</li>
                    <li className="">Origin:{character.origin.name}</li>
                    <li className="">Species:{character.species}</li>
                    <li className="">Episodes:{episodes}</li>
                </ul>
            </div>
        );
    }
}
CharacterDetail.propTypes = {
    characters: PropTypes.arrayOf(PropTypes.object).isRequired,
    id: PropTypes.string.isRequired
}

export default CharacterDetail;