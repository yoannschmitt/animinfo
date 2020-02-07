import React from "react";

import { Card } from 'react-bootstrap';
import { Link } from "react-router-dom";

const AnimeCard = (props) => {
    return (
        <Link to={`/anime/${props.anime.mal_id}`}>
            <Card style={{ width: '18rem' }} className="m-2">
                {
                    props.anime.rank ?
                    <div className="rank">#{props.anime.rank}</div>:''
                }
                <Card.Img className="card-img" variant="top" src={props.anime.image_url} />
                <Card.Body>
                    <Card.Title>{props.anime.title}</Card.Title>
                    {/* <Card.Text>#{props.anime.rank}</Card.Text> */}
                </Card.Body>
            </Card>
        </Link>
    );
}

export default AnimeCard;