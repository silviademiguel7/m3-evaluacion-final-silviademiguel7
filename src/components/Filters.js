import React from 'react';
import PropTypes from 'prop-types';
import './Filters.scss';

const Filters = (props) => {
    const { handleOnChange, inputTextFilter, FilterByGender, genderFilter, FilterBySpecie, specieFilter , FilterByStatus} = props;
    return (
        <div className="search-container__filterInput">
            <label htmlFor="inputText"></label>
            <input type="text"
                className="input"
                name="inputText"
                id="inputText"
                placeholder="Filtra por nombre"
                onChange={handleOnChange}
                value={inputTextFilter} />

            <label htmlFor="gender">Filtra por Genero</label>
            <select id="gender" name="gender" onChange={FilterByGender} value={genderFilter}>
                <option value="Todos">Todos</option>
                <option value="Female">Femenino</option>
                <option value="Male">Masculino</option>
                <option value="unknown">Unknown</option>
            </select>
            <ul>
                <li>
                    <input type="radio" value="Todos" onChange={FilterBySpecie} value="Todos" checked={specieFilter === "Todos"} />
                    Todos
                </li>
                <li>
                    <input type="radio" value="Human" onChange={FilterBySpecie} value="Human" checked={specieFilter === "Human"} />
                    Human
                </li>
                <li>
                    <input type="radio" value="Alien" onChange={FilterBySpecie} value="Alien" checked={specieFilter === "Alien"} />
                    Alien
               </li>
            </ul>
            <div>
                <p>Por Estatus</p>
                <label htmlFor="vivo" className="search-label-checkbox">
                Vivo<input id="vivo" type="checkbox" value="Alive" onChange={FilterByStatus}/>
                </label>
                <label htmlFor="muerto" className="search-label-checkbox">
                Muerto<input id="muerto" type="checkbox" value="Dead" onChange={FilterByStatus}/>
                </label>
                <label htmlFor="desconocido" className="search-label-checkbox">
                Desconocido<input id="desconocido" type="checkbox" value="unknown" onChange={FilterByStatus}/>
                </label>
            </div>



        </div>
    );
}

Filters.propTypes = {
    inputTextFilter: PropTypes.string.isRequired,
    handleOnChange: PropTypes.func.isRequired,
    FilterByGender: PropTypes.func.isRequired,
    genderFilter: PropTypes.string.isRequired,
    FilterBySpecie: PropTypes.func.isRequired,
    specieFilter: PropTypes.string.isRequired,
}

export default Filters;