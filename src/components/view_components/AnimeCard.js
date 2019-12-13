import React, { useState } from "react";

import { Card } from 'react-bootstrap';

const AnimeCard = (props) => {

    return (
        <Card style={{ width: '18rem' }} className="m-2">
            <div class="rank">#{props.anime.rank}</div>
            <Card.Img className="card-img" variant="top" src={props.anime.image_url} />
            <Card.Body>
                <Card.Title>{props.anime.title}</Card.Title>
                {/* <Card.Text>#{props.anime.rank}</Card.Text> */}
            </Card.Body>
        </Card>
    );
}

export default AnimeCard;