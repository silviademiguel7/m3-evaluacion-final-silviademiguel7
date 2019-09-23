import React from 'react';
import PropTypes from 'prop-types';
import Filters from './Filters';
import CharacterList from './CharacterList';

const Landing = (props) => {
        const { characters, inputTextFilter, handleOnChange } = props;
        return (
            <main className="main">
                <Filters
                    inputTextFilter={inputTextFilter}
                    handleOnChange={handleOnChange} />
                <CharacterList
                    characters={characters}
                    inputTextFilter={inputTextFilter} />
            </main>
        );
    }

CharacterList.propTypes = {
    characters: PropTypes.arrayOf(PropTypes.object).isRequired,
    inputTextFilter: PropTypes.string.isRequired,
    handleOnChange: PropTypes.func,
}

export default Landing;