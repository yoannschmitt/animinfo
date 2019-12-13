import React, { useEffect, useState } from "react";
import axios from "axios";

import AnimeCard from './AnimeCard.js'

const Top = props => {
  const [topList, setTopList] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.jikan.moe/v3/top/anime")
      .then(result => {
        setTopList(result.data.top)
      });
  }, []);

  return (
    <div className="col-12">
      <div className="row top-anime-list">
        {console.log(topList)}
        {topList.map(anime =>{
          return (
            <AnimeCard anime={anime} />
          )
        })}
      </div>

    </div>
  );
};

export default Top;
