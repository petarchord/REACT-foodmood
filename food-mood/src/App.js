import React from "react";
import styles from "./App.module.scss";
import { Header, Home, SideDrawwer, BackDrop } from "./components";

function App() {
  return (
    <div className={styles.container}>
      <SideDrawwer />
      <BackDrop />
      <Header />
      <Home />
    </div>
  );
}

export default App;
