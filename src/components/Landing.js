import React from 'react';
import PropTypes from 'prop-types';
import Search from './Search';
import CardsList from './CardsList';

class Landing extends React.Component {

    render() {
        const { characters,
            inputTextFilter,
            handleOnChange,
        } = this.props
        return (
            <main>
                <Search
                    inputTextFilter={inputTextFilter}
                    handleOnChange={handleOnChange}/>
                <CardsList characters={characters}
                    inputTextFilter={inputTextFilter}/>
            </main>
        );
    }
}
CardsList.propTypes = {
    characters: PropTypes.arrayOf(PropTypes.object).isRequired,
    inputTextFilter: PropTypes.string.isRequired,
    handleOnChange: PropTypes.func.isRequired,
}

export default Landing;