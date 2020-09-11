import React from "react";
import styles from "./BurgerMenu.module.scss";
import BurgerMenuItem from "../BurgerMenuItem/BurgerMenuItem";
import ShopingCart from "../ShopingCart/ShopingCart";

const BurgerMenu = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.burger_menu_title}>
        Order your favourite <span style={{ color: "coral" }}>burger</span> in
        less than a minute.
      </h3>
      <BurgerMenuItem
        key={0}
        id={0}
        name="Hamburger"
        price={12}
        image="tuna.jpg"
      />
      <BurgerMenuItem
        key={1}
        id={1}
        name="Cheseburger"
        price={11}
        image="napolitana.jpg"
      />
      <BurgerMenuItem
        key={2}
        id={2}
        name="Chicken Burger"
        price={11.5}
        image="chili.jpg"
      />

      <BurgerMenuItem
        key={3}
        id={3}
        name="BIG Burger"
        price={11.5}
        image="kalimero.jpg"
      />

      <ShopingCart />
    </div>
  );
};

export default BurgerMenu;
