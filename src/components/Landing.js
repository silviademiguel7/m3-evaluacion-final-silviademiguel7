import React from 'react';
import PropTypes from 'prop-types';
import Filters from './Filters';
import CharacterList from './CharacterList';

class Landing extends React.Component {

    render() {
        const { characters,
            inputTextFilter,
            handleOnChange,
        } = this.props
        return (
            <main className="main">
                <Filters
                    inputTextFilter={inputTextFilter}
                    handleOnChange={handleOnChange}/>
                <CharacterList characters={characters}
                    inputTextFilter={inputTextFilter}/>
            </main>
        );
    }
}

CharacterList.propTypes = {
    characters: PropTypes.arrayOf(PropTypes.object).isRequired,
    inputTextFilter: PropTypes.string.isRequired,
    handleOnChange: PropTypes.func,
}

export default Landing;