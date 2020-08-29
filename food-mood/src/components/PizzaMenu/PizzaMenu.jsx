import React from "react";
import styles from "./PizzaMenu.module.scss";
import PizzaMenuItem from "../PizzaMenuItem/PizzaMenuItem";

const PizzaMenu = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.pizza_menu_title}>
        Order your favourite pizza in less than a minute.
      </h3>
      <PizzaMenuItem
        key={0}
        id={0}
        name="Tuna Pizza"
        price={12}
        image="tuna.jpg"
      />
      <PizzaMenuItem
        key={1}
        id={1}
        name="Napolitana"
        price={11}
        image="napolitana.jpg"
      />
      <PizzaMenuItem
        key={2}
        id={2}
        name="Chili Pizza"
        price={11.5}
        image="chili.jpg"
      />
    </div>
  );
};

export default PizzaMenu;
