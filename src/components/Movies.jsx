import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Grid } from "semantic-ui-react";

const Movies = () => {
  const [moviesList, setMoviesList] = useState([]);

  const getSearch = async () => {
    try {
      const response = await axios.get("/pc-se/serier/samtliga");
      setMoviesList(
        response.data._embedded["viaplay:blocks"][0]._embedded[
          "viaplay:products"
        ]
      );
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSearch();
  }, []);

  const show = moviesList.map((movie, index) => {
    return (
      <div className="display-show" key={index}>
        <img src={movie.content.images.boxart.url} />
      </div>
    );
  });

  return <div>{show}</div>;
};

export default Movies;
