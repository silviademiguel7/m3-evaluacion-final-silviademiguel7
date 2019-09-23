import React from 'react';
import PropTypes from 'prop-types';
import './CharacterCard.css';

class CharacterCard extends React.Component {
    render() {
        const { character } = this.props;
        return (
            <div className="card">
                <div className="card__image">
                    <img src={character.image} alt={`imagen de ${character.name}`} />
                </div>
                <div className="card__data">
                    <p className="card__data-name">{character.name}</p>
                    <p className="card__data-specie">{character.species}</p>
                </div>
            </div>
        );
    }
}

CharacterCard.propTypes = {
    character: PropTypes.object
}

export default CharacterCard;
