import React, { useEffect, useState } from "react";
import axios from "axios";
import { ListGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";


const Top = props => {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    axios
      .get("/favorites")
      .then(result => {
        setFavorites(result.data)
      });
  }, []);

  const handleDeleteFavorite = (event,id) => {
    event.preventDefault();
    axios.post('/delete', {
    headers: {
        'Access-Control-Allow-Origin': '*',
    },
        "mal_id": id,
    })
    .then(function (response) {
        if(response.status == 200){
            document.getElementById(id).remove();
        }
    })
}

  return (
    <div className="col-12 mt-3">
        <ListGroup>
        {favorites.map(anime =>{
          return (
            <Link key={anime.mal_id} to={`/anime/${anime.mal_id}`} id={anime.mal_id}>
                <ListGroup.Item key={anime.mal_id} className="d-flex justify-content-between align-items-center">
                    <p className="mb-0">{anime.name}</p>
                    <button type="submit" className="btn btn-danger" onClick={(e) => handleDeleteFavorite(e,anime.mal_id)}>Supprimer</button>
                </ListGroup.Item>
            </Link>
          )
        })}
        </ListGroup>
    </div>
  );
};

export default Top;
