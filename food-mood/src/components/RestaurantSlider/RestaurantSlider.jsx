import React from "react";
import styles from "./RestaurantSlider.module.scss";
import  { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Restaurants from "../Restaurants/Restaurants";

const RestaurantSlider = () => {
    return ( 
        <div className={styles.container}>
    <div className={styles.headline_holder}>
    <p>Pick a restaurant</p>
    <div className={styles.arrow_holder}>
    <MdKeyboardArrowLeft 
    size="2em"
    color="white"
    />
    <MdKeyboardArrowRight 
    size="2em"
    color="white"
    />

    </div>

    </div>
  
    
    <Restaurants />
    


        </div>
     );
}
 
export default RestaurantSlider;