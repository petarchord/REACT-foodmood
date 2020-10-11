import React from "react";
import styles from "./FoodMenu.module.scss";
import ShopingCart from "../ShopingCart/ShopingCart";
import FoodMenuItem from "../FoodMenuItem/FoodMenuItem";
const FoodMenu = (props) => {
  console.log("props",props);
  let selectedFood = props.match.params.id;
  console.log(selectedFood);
    return ( <div className={styles.container}>
         <h3 className={styles.food_menu_title}>
        Order your favourite <span style={{ color: "coral" }}>{selectedFood}</span> in
        less than a minute.
      </h3>
      <FoodMenuItem
        key={0}
        id={0}
        name="Napolitana"
        price={12}
        image="tuna.jpg"
      />
      <FoodMenuItem
        key={1}
        id={1}
        name="Carbonara"
        price={11}
        image="napolitana.jpg"
      />
      <FoodMenuItem
        key={2}
        id={2}
        name="Bolognese"
        price={11.5}
        image="chili.jpg"
      />

      <FoodMenuItem
        key={3}
        id={3}
        name="Alfredo Tachini"
        price={11.5}
        image="kalimero.jpg"
      />

      <ShopingCart />

    </div> );
}
 
export default FoodMenu;