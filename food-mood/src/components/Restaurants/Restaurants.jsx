import React from "react";
import styles from "./Restaurants.module.scss";
import RestaurantItem from "../RestaurantItem/RestaurantItem";
import night_and_day_logo from "../../images/nightandday.png";
import cezar_logo from "../../images/cezar-homepage-logo.png";



const Restaurants = () => {
    return ( <div className={styles.container}>

        <RestaurantItem
        id = {0}
        name="Night and Day"
        image = {night_and_day_logo}
        />
        <RestaurantItem
        id = {1} 
        name="Cezar"
        image = {cezar_logo}
        />
        <RestaurantItem
        id = {2} 
        name ="Go-go"
        image={night_and_day_logo}
        />
        <RestaurantItem
        id = {3} 
        name ="Dva puta dva"
        image={night_and_day_logo}
        />

    </div> );
}
 
export default Restaurants;