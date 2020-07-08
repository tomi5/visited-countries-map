import React from "react";
import Header from "../Header/Header";
import MapContainer from "../MapContainer/MapContainer";
import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Header title='Interactive Visited Countries Map' />
      <MapContainer />
    </div>
  );
};

export default App;
