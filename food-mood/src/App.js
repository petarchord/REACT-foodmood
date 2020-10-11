import React, { useContext, useState } from "react";
import styles from "./App.module.scss";
import {
  Header,
  Home,
  SideDrawwer,
  BackDrop,
  PizzaMenu,
  BurgerMenu,
  PastaMenu,
  UserProfile,
  UserNavbar,
  UserOrders,
  FoodMenu
} from "./components";
import { GlobalProvider, GlobalContext } from "./context/GlobalState";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [sideDrawwerOpen, setSideDrawwer] = useState(false);
  const toggleSideDrawwer = () => {
    setSideDrawwer(!sideDrawwerOpen);
  };

  return (
    <GlobalProvider>
      <Router>
        <div className={styles.container}>
          {sideDrawwerOpen ? (
            <SideDrawwer toggleSideDrawwer={toggleSideDrawwer} />
          ) : null}
          {sideDrawwerOpen ? (
            <BackDrop toggleSideDrawwer={toggleSideDrawwer} />
          ) : null}
          <Header toggleSideDrawwer={toggleSideDrawwer} />
          
          <Route path="/profile" component={UserNavbar} />
          <Route path="/profile/orders" component={UserOrders} />  
          <Switch>
            <Route path="/" exact component={Home} />
            {/* <Route path="/pizzamenu" component={PizzaMenu} />
            <Route path="/burgermenu" component={BurgerMenu} />
            <Route path="/pastamenu" component={PastaMenu} /> */}
            <Route path="/food/:id" component={FoodMenu} />
            
            
            
            
            
          </Switch>
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
