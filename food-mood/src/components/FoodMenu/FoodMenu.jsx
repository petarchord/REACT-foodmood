import React, {useState} from "react";
import styles from "./FoodMenu.module.scss";
import ShopingCart from "../ShopingCart/ShopingCart";
import FoodMenuItem from "../FoodMenuItem/FoodMenuItem";
import RestaurantSlider from "../RestaurantSlider/RestaurantSlider";
const FoodMenu = (props) => {
  const [selectedItem,setSelectedItem] = useState({id:0,name:"Night and Day"});
  let selectedFood = props.match.params.id;
  console.log(selectedFood);
    return ( <div className={styles.container}>
         {/* <h3 className={styles.food_menu_title}>
        Order your favourite <span style={{ color: "coral" }}>{selectedFood}</span> in
        less than a minute.
      </h3> */}
      <h3 className={styles.food_menu_title}>
        Welcome to the <span style={{ color: "coral" }}>{selectedFood}</span> world!
      </h3>
      <RestaurantSlider
      selectedItem = {selectedItem}
      setSelectedItem = {setSelectedItem}
      />

    <h3>{selectedItem.name}</h3>
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