import React from "react";
import styles from "./RestaurantSlider.module.scss";
import  { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Restaurants from "../Restaurants/Restaurants";

const RestaurantSlider = () => {
    return ( 
        <div className={styles.container}>
<div className={styles.restaurant_container}>

    <MdKeyboardArrowLeft 
    size="2em"
    color="white"
    />
    <Restaurants />
    <MdKeyboardArrowRight 
    size="2em"
    color="white"
    />

</div>
        </div>
     );
}
 
export default RestaurantSlider;