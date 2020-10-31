import React , { useState } from "react";
import styles from "./RestaurantItem.module.scss";
import cx from "classnames";

const RestaurantItem = ({id,name,image,selected,setSelected}) => {
    // const [selected ,setSelected] = useState(0);

   const toggleActiveStyles = index => {
       if(selected === index)
       return cx(styles.container,styles.active);
       else
       return cx(styles.container,styles.inactive)
   }
    return ( <div className={toggleActiveStyles(id)}
    onClick = {() => {
        setSelected(id);
    }}
    >
<img src={image} alt={name}/>
<h3>{name}</h3>
    </div> );
}
 
export default RestaurantItem;