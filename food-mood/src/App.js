import React, { useContext, useState } from "react";
import styles from "./App.module.scss";
import { Header, Home, SideDrawwer, BackDrop, PizzaMenu } from "./components";
import { GlobalProvider, GlobalContext } from "./context/GlobalState";

function App() {
  const [sideDrawwerOpen, setSideDrawwer] = useState(false);
  const toggleSideDrawwer = () => {
    setSideDrawwer(!sideDrawwerOpen);
  };

  return (
    <GlobalProvider>
      <div className={styles.container}>
        {sideDrawwerOpen ? <SideDrawwer /> : null}
        {sideDrawwerOpen ? (
          <BackDrop toggleSideDrawwer={toggleSideDrawwer} />
        ) : null}
        <Header toggleSideDrawwer={toggleSideDrawwer} />
        <PizzaMenu />
      </div>
    </GlobalProvider>
  );
}

export default App;
