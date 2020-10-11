import React from "react";
import styles from "./PizzaMenu.module.scss";
import PizzaMenuItem from "../PizzaMenuItem/PizzaMenuItem";
import ShopingCart from "../ShopingCart/ShopingCart";

const PizzaMenu = (props) => {
  console.log("props:",props.location.pathname);
  let selectedFood = props.location.pathname.split("/");
  console.log(selectedFood);
  return (
    <div className={styles.container}>
      <h3 className={styles.pizza_menu_title}>
        Order your favourite <span style={{ color: "coral" }}>pizza</span> in
        less than a minute.
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

      <PizzaMenuItem
        key={3}
        id={3}
        name="Kalimero Pizza"
        price={11.5}
        image="kalimero.jpg"
      />

      <ShopingCart />
    </div>
  );
};

export default PizzaMenu;
