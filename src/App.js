import React from "react";
import Header from "./components/Header.js";
import Container from "@material-ui/core/Container";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";
import Map from "./components/Map.js";
import Paragraph from "./components/Paragraph.js";
function App() {
  return (
    <div className="SpiderTech">
      <Header> </Header>
      <Container>
        <Body></Body>
        <Paragraph></Paragraph>
        <Map></Map>
      </Container>
      <Footer></Footer>
    </div>
  );
}

export default App;
