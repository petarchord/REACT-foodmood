import React, {useState} from "react";
import styles from "./Restaurants.module.scss";
import RestaurantItem from "../RestaurantItem/RestaurantItem";
import night_and_day_logo from "../../images/nightandday.png";
import cezar_logo from "../../images/cezar-homepage-logo.png";



const Restaurants = () => {
    const [selected ,setSelected] = useState(0);
    return ( <div id="res_slider" className={styles.container}>

        <RestaurantItem
        id = {0}
        name="Night and Day"
        image = {night_and_day_logo}
        setSelected = {setSelected}
        selected = {selected}
        />
        <RestaurantItem
        id = {1} 
        name="Cezar"
        image = {cezar_logo}
        setSelected = {setSelected}
        selected = {selected}
        />
        <RestaurantItem
        id = {2} 
        name ="Go-go"
        image={night_and_day_logo}
        setSelected = {setSelected}
        selected = {selected}
        />
        <RestaurantItem
        id = {3} 
        name ="Dva puta dva"
        image={night_and_day_logo}
        setSelected = {setSelected}
        selected = {selected}
        />
         <RestaurantItem
        id = {4} 
        name ="Pleasure"
        image={night_and_day_logo}
        setSelected = {setSelected}
        selected = {selected}
        />
         <RestaurantItem
        id = {5} 
        name ="Caribic "
        image={night_and_day_logo}
        setSelected = {setSelected}
        selected = {selected}
        />

    </div> );
}
 
export default Restaurants;