import React from 'react';
import PropTypes from 'prop-types';
import './Filters.scss';

const Filters = (props) => {
    const { handleOnChange, inputTextFilter, filterByGender, genderFilter } = props;
    return (
        <React.Fragment>
            <div className="search-container__filterInput">
                <label htmlFor="inputText"></label>
                <input type="text"
                    className="input"
                    name="inputText"
                    id="inputText"
                    placeholder="Filtra por nombre"
                    onChange={handleOnChange}
                    value={inputTextFilter} />
            </div>
            <label htmlFor="gender">Filtra por genero:</label>
            <select id="gender" name="gender" onChange={filterByGender} value={genderFilter}>
                <option value="Todos">Todos</option>
                <option value="Male">Masculino</option>
                <option value="Female">Femenino</option>
                <option value="unknown">Desconocido</option>
            </select>
        </React.Fragment>

    );
}

Filters.propTypes = {
    inputTextFilter: PropTypes.string.isRequired,
    handleOnChange: PropTypes.func.isRequired,
    filterByGender:PropTypes.func.isRequired,
    genderFilter: PropTypes.string.isRequired,
}

export default Filters;