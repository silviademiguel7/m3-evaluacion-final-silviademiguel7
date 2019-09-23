const ENDPOINT = "https://rickandmortyapi.com/api/character/";

const getData = () => {
    return(
        fetch(ENDPOINT).then(response => response.json())
    );
    }

export {getData};