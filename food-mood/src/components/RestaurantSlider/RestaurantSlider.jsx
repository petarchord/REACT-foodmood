import React from "react";
import styles from "./RestaurantSlider.module.scss";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Restaurants from "../Restaurants/Restaurants";

const RestaurantSlider = ({ selectedItem, setSelectedItem }) => {
  return (
    <div className={styles.container}>
      <p>Pick a restaurant</p>
      {/* <div className={styles.arrow_holder}>
        <MdKeyboardArrowLeft size="1.8em" color="white" />
        <MdKeyboardArrowRight
          size="1.8em"
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
      </div> */}

      <Restaurants
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
    </div>
  );
};

export default RestaurantSlider;
