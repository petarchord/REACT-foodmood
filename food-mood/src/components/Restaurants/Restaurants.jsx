import React, {useState} from "react";
import styles from "./Restaurants.module.scss";
import RestaurantItem from "../RestaurantItem/RestaurantItem";
import night_and_day_logo from "../../images/nightandday.png";
import cezar_logo from "../../images/cezar-homepage-logo.png";



const Restaurants = ({selectedItem,setSelectedItem}) => {
    // const [selected ,setSelectedItem] = useState(0);
    return ( <div id="res_slider" className={styles.container}>

        <RestaurantItem
        id = {0}
        name="Night and Day"
        image = {night_and_day_logo}
        setSelectedItem = {setSelectedItem}
        selectedItem = {selectedItem}
        rating = {3}
        deliveryPrice = {10}
        />
        <RestaurantItem
        id = {1} 
        name="Cezar"
        image = {cezar_logo}
        setSelectedItem = {setSelectedItem}
        selectedItem = {selectedItem}
        rating = {4}
        deliveryPrice = {10}
        />
        <RestaurantItem
        id = {2} 
        name ="Go-go"
        image={night_and_day_logo}
        setSelectedItem = {setSelectedItem}
        selectedItem = {selectedItem}
        rating = {2}
        deliveryPrice = {10}
        />
        <RestaurantItem
        id = {3} 
        name ="Dva puta dva"
        image={night_and_day_logo}
        setSelectedItem = {setSelectedItem}
        selectedItem = {selectedItem}
        rating = {3}
        deliveryPrice = {10}
        />
         <RestaurantItem
        id = {4} 
        name ="Pleasure"
        image={night_and_day_logo}
        setSelectedItem = {setSelectedItem}
        selectedItem = {selectedItem}
        rating = {3}
        deliveryPrice = {10}
        />
         <RestaurantItem
        id = {5} 
        name ="Caribic "
        image={night_and_day_logo}
        setSelectedItem = {setSelectedItem}
        selectedItem = {selectedItem}
        rating = {3}
        deliveryPrice = {10}
        />

    </div> );
}
 
export default Restaurants;