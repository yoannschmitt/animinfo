import React, { useState } from "react";
import { InputGroup, FormControl } from 'react-bootstrap';
import axios from "axios";
import AnimeCard from './AnimeCard.js';

const SearchAnime = (props) => {
  const [name, setName] = useState("");
  const [searchedAnimes, setSearchedAnimes] = useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const AnimeSubmit = (event) => {
    setSearchedAnimes([]);
    event.preventDefault();
    searchAnime();
  }

  const searchAnime = (event) => {
    const CancelToken = axios.CancelToken;
		const source = CancelToken.source();
		async function fetchAnime() {
			try {
				let res = await axios.get(`https://api.jikan.moe/v3/search/anime?q=${name}*`,
					{ cancelToken:source.token });
				if (res.data){
          // console.log(res.data)
          setSearchedAnimes(res.data.results);
				}
				else
          console.log('Erreur 404');
			} 
			catch (err) {
				if (axios.isCancel(err))
					source.cancel();
				// console.log('/404');
			}
		}

		if (name)
			fetchAnime();
		return () => {
			source.cancel();
		}
  }

  return (
    <div className="d-flex align-items-center justify-content-center w-100 flex-column">
      <form id="search-anime" className="d-flex align-items-center justify-content-center w-100" onSubmit={AnimeSubmit}>
        <div className="col-11 col-sm-8 col-md-7">
            <label htmlFor="search-anime-input">Rechercher un animé</label>
              <InputGroup className="mb-3">
                  <FormControl className="p-4 input" placeholder="Rechercher un animé" aria-label="Rechercher un animé" id="search-anime-input" onChange={e => handleNameChange(e)}/>
              </InputGroup>
              <input type="submit" className="btn btn-dark" value="Rechercher"/>
        </div>
      </form>
      <div className="col-12 h-100">
        <div id="anime-list" className="row top-anime-list">
          {searchedAnimes ? 
            (searchedAnimes.map(anime => {
            return <AnimeCard key={anime.mal_id} anime={anime}/>;
            })) : 
            (
                <p>Aucun résultat</p>
            )}
        </div>
      </div>
    </div>
    
  );
}

export default SearchAnime;