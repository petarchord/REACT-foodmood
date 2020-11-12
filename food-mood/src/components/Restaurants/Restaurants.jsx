import React, { useState } from "react";
import styles from "./Restaurants.module.scss";
import RestaurantItem from "../RestaurantItem/RestaurantItem";
import night_and_day_logo from "../../images/nightandday.png";
import cezar_logo from "../../images/cezar-homepage-logo.png";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Restaurants = ({ selectedItem, setSelectedItem }) => {
  // const [selected ,setSelectedItem] = useState(0);
  return (
    <div id="res_slider" className={styles.container}>
      <div className={styles.arrow_holder}>
        <MdKeyboardArrowLeft size="2em" color="white" />
        <MdKeyboardArrowRight
          size="2em"
          color="white"
          onClick={() => {
            let res_slider = document.getElementById("res_slider");
            // let inc = 135 - res_slider.scrollLeft;
            let inc;
            if (res_slider.scrollLeft % 142 === 0) {
              if (res_slider.scrollLeft === 0) inc = 136;
              else inc = 142;
            } else {
              inc = Math.abs(142 - res_slider.scrollLeft);
            }
            console.log(res_slider.style);
            console.log(res_slider.scrollLeft);
            res_slider.scroll({
              left: res_slider.scrollLeft + inc,
              behavior: "smooth",
            });
          }}
        />
      </div>
      <RestaurantItem
        id={0}
        name="Night and Day"
        image={night_and_day_logo}
        setSelectedItem={setSelectedItem}
        selectedItem={selectedItem}
        rating={3}
        deliveryPrice={10}
      />
      <RestaurantItem
        id={1}
        name="Cezar"
        image={cezar_logo}
        setSelectedItem={setSelectedItem}
        selectedItem={selectedItem}
        rating={4}
        deliveryPrice={10}
      />
      <RestaurantItem
        id={2}
        name="Go-go"
        image={night_and_day_logo}
        setSelectedItem={setSelectedItem}
        selectedItem={selectedItem}
        rating={2}
        deliveryPrice={10}
      />
      <RestaurantItem
        id={3}
        name="Dva puta dva"
        image={night_and_day_logo}
        setSelectedItem={setSelectedItem}
        selectedItem={selectedItem}
        rating={3}
        deliveryPrice={10}
      />
      <RestaurantItem
        id={4}
        name="Pleasure"
        image={night_and_day_logo}
        setSelectedItem={setSelectedItem}
        selectedItem={selectedItem}
        rating={3}
        deliveryPrice={10}
      />
      <RestaurantItem
        id={5}
        name="Caribic "
        image={night_and_day_logo}
        setSelectedItem={setSelectedItem}
        selectedItem={selectedItem}
        rating={3}
        deliveryPrice={10}
      />
    </div>
  );
};

export default Restaurants;
