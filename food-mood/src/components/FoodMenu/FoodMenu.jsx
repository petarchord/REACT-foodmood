import React, { useState } from "react";
import styles from "./FoodMenu.module.scss";
import ShopingCart from "../ShopingCart/ShopingCart";
import FoodMenuItem from "../FoodMenuItem/FoodMenuItem";
import pizza_wallpaper from "../../images/pizza_wallpaper_two.jpg";
import RestaurantSlider from "../RestaurantSlider/RestaurantSlider";
const FoodMenu = (props) => {
  const [selectedItem, setSelectedItem] = useState({
    id: 0,
    name: "Night and Day",
  });
  let selectedFood = props.match.params.id;
  return (
    <div className={styles.container}>
      {/* <h3 className={styles.food_menu_title}>
        Order your favourite <span style={{ color: "coral" }}>{selectedFood}</span> in
        less than a minute.
      </h3> */}
      <div></div>
      <h3 className={styles.food_menu_title}>
        Welcome to the <span style={{ color: "coral" }}>{selectedFood}</span>{" "}
        world. You are one step away from your favourite pizza.
      </h3>
      <RestaurantSlider
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />

      <h3>{selectedItem.name}</h3>

      <div className={styles.food_menu_items}>
        <FoodMenuItem
          key={0}
          id={0}
          name="Napolitana"
          ingredients="ham,cheese,tomato"
          price={12}
          image="tuna.jpg"
        />
        <FoodMenuItem
          key={1}
          id={1}
          name="Carbonara"
          ingredients="ham,cheese,tomato"
          price={11}
          image="napolitana.jpg"
        />
        <FoodMenuItem
          key={2}
          id={2}
          name="Bolognese"
          ingredients="ham,cheese,tomato"
          price={11.5}
          image="chili.jpg"
        />

        <FoodMenuItem
          key={3}
          id={3}
          name="Alfredo Tachini"
          ingredients="ham,cheese,tomato"
          price={11.5}
          image="kalimero.jpg"
        />

        <FoodMenuItem
          key={4}
          id={4}
          name="Alfredo Tachini"
          ingredients="ham,cheese,tomato"
          price={11.5}
          image="kalimero.jpg"
        />

        <FoodMenuItem
          key={5}
          id={5}
          name="Alfredo Tachini"
          ingredients="ham,cheese,tomato"
          price={11.5}
          image="kalimero.jpg"
        />

        <FoodMenuItem
          key={6}
          id={6}
          name="Alfredo Tachini"
          ingredients="ham,cheese,tomato"
          price={11.5}
          image="kalimero.jpg"
        />
      </div>

      <ShopingCart />
    </div>
  );
};

export default FoodMenu;
