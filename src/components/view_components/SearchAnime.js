import React from "react";
import { InputGroup, FormControl } from 'react-bootstrap';

const SearchAnime = (props) => {
  return (
    <div className="col-11 col-sm-8 col-md-7">
        <label htmlFor="search-anime-input">Rechercher un animé</label>
        <InputGroup className="mb-3">
            <FormControl className="p-4 input" placeholder="Rechercher un animé" aria-label="Rechercher un animé" id="search-anime-input"/>
        </InputGroup>
    </div>
  );
}

export default SearchAnime;