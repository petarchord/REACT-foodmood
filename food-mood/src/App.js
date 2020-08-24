import React from "react";
import styles from "./App.module.scss";
import { Header, Home } from "./components";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Home />
    </div>
  );
}

export default App;
