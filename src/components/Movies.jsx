import React, { useState, useEffect } from "react";
import axios from "axios";

const Movies = () => {
  const [movieList, setMovieList] = useState([]);

  const getSearch = async () => {
    try {
      const response = await axios.get(
        "https://content.viaplay.se/pc-se/serier/samtliga"
      );
      debugger;
      // yourDataObject._embedded['viaplay:blocks'][0]._embedded['viaplay:products']

      setMovieList(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSearch();
  }, []);

  return (
    <div>
      <p>Hej</p>
    </div>
  );
};

export default Movies;
