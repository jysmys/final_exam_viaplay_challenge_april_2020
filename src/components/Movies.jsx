import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Grid } from "semantic-ui-react";

const Movies = () => {
  const [moviesList, setMoviesList] = useState([]);

  const getSearch = async () => {
    try {
      const response = await axios.get("/pc-se/serier/samtliga");
      debugger;
      // yourDataObject._embedded['viaplay:blocks'][0]._embedded['viaplay:products']

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

  const show = moviesList.map((movie) => {
    debugger;
    return <div className="display-show"></div>;
  });

  return (
    <Container>
      <p>Hej</p>
    </Container>
  );
};

export default Movies;
