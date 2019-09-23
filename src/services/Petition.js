//const ENDPOINT = "https://rickandmortyapi.com/api/character/";
const ENDPOINTNEW = "https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json";

const getData = () => {
    return(
        fetch(ENDPOINTNEW).then(response => response.json())
    );
    }

export {getData};