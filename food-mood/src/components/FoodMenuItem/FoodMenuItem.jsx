import React , {useState,useContext} from "react";
import styles from "./FoodMenuItem.module.scss";
import { GlobalContext } from "../../context/GlobalState";
import {FiPlusCircle,FiMinusCircle} from "react-icons/fi";

const FoodMenuItem = ({ id, name, price, image, ingredients }) => {
    const [quantity, setQuantity] = useState(1);
  const { increaseBill, addOrderItem } = useContext(GlobalContext);
  const imageUrl = `https://yummi-pizza-laravel.herokuapp.com/storage/pizzas/${image}`;
  const addItemClickHandler = () => {
    const bill = quantity * price;
    increaseBill(bill);
    const menuItem = {
      id,
      name,
      ingredients,
      price,
      image,
      quantity,
    };
    addOrderItem(menuItem);
  };
    return ( <div className={styles.container}>
         <div className={styles.food_menu_item}>
        <div className={styles.food_menu_img}>
          <img src={imageUrl} alt="" />
        </div>
        <div className={styles.food_menu_info}>
          <h3>{name}</h3>
          <p>{ingredients}</p>
          <p>{price}$</p>
          <button
            onClick={() => {
              addItemClickHandler();
            }}
          >
            Add to shoping cart
          </button>
        </div>
        <div className={styles.quantity}>
          {/* <button
            onClick={() => {
              setQuantity(quantity + 1);
            }}
          >
            +
          </button> */}
          <FiPlusCircle 
          onClick={() => {
            setQuantity(quantity + 1);
          }}
          size="1.8em"
          />
          <p>{quantity}</p>
          {/* <button
            onClick={() => {
              setQuantity(quantity - 1);
            }}
            disabled={quantity <= 1 ? true : false}
          >
            -
          </button> */}
          <FiMinusCircle 
          size="1.8em"
          onClick={(e) => {
            if(quantity <= 1)
            e.preventDefault();
            else
            setQuantity(quantity - 1);
          }}
          

          />
        </div>
      </div>

    </div> );
}
 
export default FoodMenuItem;