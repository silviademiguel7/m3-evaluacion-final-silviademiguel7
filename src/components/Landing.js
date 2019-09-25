import React from 'react';
import PropTypes from 'prop-types';
import Filters from './Filters';
import CharacterList from './CharacterList';

const Landing = (props) => {
        const { characters, inputTextFilter, handleOnChange, filterByGender, genderFilter } = props;
        return (
            <main className="main">
                <Filters
                    inputTextFilter={inputTextFilter}
                    handleOnChange={handleOnChange}
                    filterByGender={filterByGender}
                    genderFilter={genderFilter} />
                <CharacterList
                    characters={characters}
                    inputTextFilter={inputTextFilter}
                    genderFilter={genderFilter} />
            </main>
        );
    }

CharacterList.propTypes = {
    characters: PropTypes.arrayOf(PropTypes.object).isRequired,
    filterByGender:PropTypes.func.isRequired,
    inputTextFilter: PropTypes.string.isRequired,
    handleOnChange: PropTypes.func,
    genderFilter: PropTypes.string,
}

export default Landing;