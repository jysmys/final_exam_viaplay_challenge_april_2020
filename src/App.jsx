import React from "react";
import "./App.css";
import Movies from "./components/Movies";
import { Container } from "semantic-ui-react";

const App = () => {
  return (
    <div>
      <Container
        style={{ backgroundColor: "black", width: "100%", height: "40px" }}
      >
        {" "}
        <img
          src="https://kundservice.viaplay.se/wp-content/themes/viaplaycs/assets/dist/images/viaplay_white.svg"
          style={{ height: "40px" }}
        />
      </Container>
      <Movies />
      <Container
        style={{ backgroundColor: "black", width: "100%", height: "40px" }}
      ></Container>
    </div>
  );
};

export default App;
