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
        if (character) {
            const episodes = character.episode.length;
            return (
                <React.Fragment>
                    <Link to="/"><div className="return">Volver</div></Link>
                    <div className="container-detail">
                        <div className="container-detail__card">
                                <img src={character.image} alt={`imagen de ${character.name}`} />
                           
                            <ul>
                                <li className="">Nombre: {character.name}</li>
                                <li className="">Status:{(character.status === 'Dead')
                                    ? <i className="fas fa-skull-crossbones"></i>
                                    : character.status} </li>
                                <li className="">Origin:{character.origin.name}</li>
                                <li className="">Species:{(character.species === 'Alien')
                                    ? <i className="fab fa-reddit-alien"></i>
                                    : <i className="far fa-user"></i>}
                                </li>
                                <li className="">Episodes:{episodes}</li>
                            </ul>
                        </div>
                    </div>

                </React.Fragment>
            );
        } else {
            return (
                <div className="title-undefined">Esta Pagina no esta disponible</div>
            );
        }
    }
}
CharacterDetail.propTypes = {
    characters: PropTypes.arrayOf(PropTypes.object).isRequired,
    id: PropTypes.string.isRequired
}

export default CharacterDetail;