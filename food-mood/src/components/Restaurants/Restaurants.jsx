import React, { useState, useRef } from "react";
import styles from "./Restaurants.module.scss";
import RestaurantItem from "../RestaurantItem/RestaurantItem";
import night_and_day_logo from "../../images/nightandday.png";
import cezar_logo from "../../images/cezar-homepage-logo.png";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Restaurants = ({ selectedItem, setSelectedItem }) => {
  const sliderRef = useRef();
  const slide = (e) => {
    console.log(e.target);
  };
  return (
    <div id="res_slider" ref={sliderRef} className={styles.container}>
      <div className={styles.arrow_holder}>
        <MdKeyboardArrowLeft
          name="left"
          size="2.5em"
          color="gray"
          onClick={(e) => {
            slide(e);
          }}
        />
        <MdKeyboardArrowRight
          name="right"
          size="2.5em"
          color="gray"
          onClick={(e) => {
            slide(e);
          }}
          // onClick={() => {

          //   let inc;
          //   if (sliderRef.current.scrollLeft % 142 === 0) {
          //     if (sliderRef.current.scrollLeft === 0) inc = 136;
          //     else inc = 142;
          //   } else {
          //     inc = Math.abs(142 - sliderRef.current.scrollLeft);
          //   }
          //   console.log(sliderRef.current.style);
          //   console.log(sliderRef.current.scrollLeft);
          //   sliderRef.current.scroll({
          //     left: sliderRef.current.scrollLeft + inc,
          //     behavior: "smooth",
          //   });
          // }}
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
