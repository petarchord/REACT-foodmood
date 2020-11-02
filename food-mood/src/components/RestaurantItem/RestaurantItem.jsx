import React , { useState } from "react";
import styles from "./RestaurantItem.module.scss";
import cx from "classnames";
import {AiOutlineStar, AiFillStar} from "react-icons/ai";


const RestaurantItem = ({id,name,image,selected,setSelected,rating}) => {
    
   const renderStars = () => {
       let starArray = [];
       for(let i=0;i<5;i++)
       {
           if(i<rating)
           starArray.push({key:i,star:0});
           else
           starArray.push({key:i,star:1});
       }
       return starArray;
   }
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
<div className={styles.rating}>
    {renderStars().map(starItem => (
        starItem.star ? <AiOutlineStar key={starItem.key} 
        size="1.5em"
        /> : <AiFillStar 
        key={starItem.key}
        size="1.5em"
        />
    ))}
</div>
<h3>{name}</h3>
    </div> );
}
 
export default RestaurantItem;