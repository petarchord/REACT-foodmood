import React from "react";
import styles from "./Restaurants.module.scss";
import RestaurantItem from "../RestaurantItem/RestaurantItem";
import night_and_day_logo from "../../images/nightandday.png";
import cezar_logo from "../../images/cezar-homepage-logo.png";


const Restaurants = () => {
    return ( <div className={styles.container}>

        <RestaurantItem
        name="Night and Day"
        image = {night_and_day_logo}
        />
        <RestaurantItem 
        name="Cezar"
        image = {cezar_logo}
        />
        <RestaurantItem 
        name ="Go-go"
        image={night_and_day_logo}
        />

    </div> );
}
 
export default Restaurants;