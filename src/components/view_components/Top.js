import React, { useEffect, useState } from "react";
import axios from "axios";

const Top = props => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    axios
      .get("https://api.jikan.moe/v3/top/anime")
      .then(result => {
        console.log(result)
      });
  }, [title]);

  return (
    <div>

    </div>
  );
};

export default Top;
