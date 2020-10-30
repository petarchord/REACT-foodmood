import React from "react";
import styles from "./RestaurantItem.module.scss";

const RestaurantItem = ({id,name,image}) => {
    return ( <div className={styles.container}>
<img src={image} alt={name}/>
<h3>{name}</h3>
    </div> );
}
 
export default RestaurantItem;