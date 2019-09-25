import React from 'react';
import PropTypes from 'prop-types';
import Filters from './Filters';
import CharacterList from './CharacterList';

const Landing = (props) => {
        const { characters, inputTextFilter, handleOnChange, FilterByGender, genderFilter, specieFilter, FilterBySpecie, statusFilter, FilterByStatus } = props;
        return (
            <main className="main">
                <Filters
                    inputTextFilter={inputTextFilter}
                    genderFilter={genderFilter}
                    specieFilter={specieFilter}
                    handleOnChange={handleOnChange} 
                    FilterByGender={FilterByGender}
                    FilterBySpecie={FilterBySpecie}
                    FilterByStatus={FilterByStatus}/>
                <CharacterList
                    characters={characters}
                    inputTextFilter={inputTextFilter}
                    genderFilter={genderFilter}
                    specieFilter={specieFilter}
                    statusFilter={statusFilter} />
            </main>
        );
    }

CharacterList.propTypes = {
    characters: PropTypes.arrayOf(PropTypes.object).isRequired,
    inputTextFilter: PropTypes.string.isRequired,
    handleOnChange: PropTypes.func,
    FilterByGender: PropTypes.func,
    genderFilter: PropTypes.string.isRequired,
    specieFilter:PropTypes.string.isRequired,
    FilterBySpecie: PropTypes.func,
    FilterByStatus:PropTypes.func,
    statusFilter:PropTypes.arrayOf(PropTypes.string)

}

export default Landing;