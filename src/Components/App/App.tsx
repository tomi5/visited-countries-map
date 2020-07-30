import React from "react";
import Header from "../Header/Header";
import MapContainer from "../MapContainer/MapContainer";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 1800px;
`;

const App = () => {
  return (
    <Wrapper>
      <Header title='Interactive Visited Countries Map' />
      <MapContainer />
    </Wrapper>
  );
};

export default App;
