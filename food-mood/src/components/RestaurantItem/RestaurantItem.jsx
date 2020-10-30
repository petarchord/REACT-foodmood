import React , { useState } from "react";
import styles from "./RestaurantItem.module.scss";
import cx from "classnames";

const RestaurantItem = ({id,name,image}) => {
    const [selected ,setSelected] = useState(0);
    return ( <div className={cx(styles.container, selected === id ? styles.active : "")}
    onClick = {() => {
        setSelected(id);
    }}
    >
<img src={image} alt={name}/>
<h3>{name}</h3>
    </div> );
}
 
export default RestaurantItem;