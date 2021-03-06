import React, { useState, useEffect } from "react";
import axios from "axios";
import { ListGroup } from 'react-bootstrap';

// import SearchAnime from "../view_components/SearchAnime.js";

const AnimeInfo = props => {
    const [id, setId] = useState('');
    const [anime, setAnime] = useState('');

    useEffect(() => {
        setId(props.match.params.id);
    }, [props.match.params.id]);

    useEffect(() => {
        const CancelToken = axios.CancelToken;
		const source = CancelToken.source();
		async function getAnimeInfo() {
			try {
				let result = await axios.get(`https://api.jikan.moe/v3/anime/${id}`,
					{ cancelToken:source.token });
                if (result.data)
                    // console.log(result.data)
                    setAnime(result.data);
                // else
					// navigate('/404');
			} catch (err) {
                if (axios.isCancel(err))
                    source.cancel();
                    
				// navigate('/404');    
			}
		}
		if (id)
			getAnimeInfo();
		return () => {
			source.cancel();
		}
    }, [id]);

    const AddToFavorites = (event) => {
        axios.post('/add', {
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
          "mal_id": id,
          "name": anime.title
        })
        .then(function (response) {
            if(response.status === 200){
                document.getElementById('favorite-feedback').innerHTML = 'Le favori a été ajouté';
                document.getElementById('favorite-feedback').classList.add('text-success');
                document.getElementById('favorite-button').remove();
            }
        //   console.log(response);*
        })
    }


    if(anime){
        return (
          <div className="anime-info p-3">
              <div className="info bg-light rounded">
                  <div className="info-card">
                      <div className="info-left">
                          <img className="card-img" variant="top" src={anime.image_url} alt="Couverture de l'animé" />
                      </div>
                      <div className="info-right p-3">
                          <h1>{anime.title}</h1>
                          <p><b>Titre original : </b>{anime.title_japanese }</p>
                          <p><b>Origine : </b>{anime.source }</p>
                          <p><b>Format : </b>{anime.type }</p>
                          <p><b>Nombre d'épisodes : </b>{anime.episodes }</p>
                          <p><b>Première diffusion : </b>{anime.premiered }</p>
                          <p><b>Note : </b>{anime.score }/10</p>
                          <button className="btn btn-success" onClick={AddToFavorites} id="favorite-button">Ajouter aux favoris</button>
                          <span id="favorite-feedback"></span>
                      </div>
                  </div>
      
                  <div className="separator"></div>
      
                  <div className="synopsis p-3">
                      <h2>Synopsis</h2>
                      <p>{anime.synopsis}</p>
                  </div>
      
                  <div className="separator"></div>   
      
                  <div className="openings p-3">
                      <h2>Openings</h2>
                      <ListGroup>
                      {anime.opening_themes ?
                          anime.opening_themes.map((value, index) => {
                              return <ListGroup.Item key={index}>{value}</ListGroup.Item>
                          })
                          :null
                      }
                      </ListGroup>
                  </div>
      
                  <div className="separator"></div>   
              </div>
          </div> 
        );
    }
    else{
        return(
        <div className="d-flex align-items-center justify-content-center h-100">
            <h1 className="not-found-message">Erreur 404 - Animé introuvable</h1>
        </div>
        );
    }
};

export default AnimeInfo;