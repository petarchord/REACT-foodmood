import React, { useState, useContext } from "react";
import styles from "./FoodMenuItem.module.scss";
import { GlobalContext } from "../../context/GlobalState";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import test_pizza_img from "../../images/test_pizza_img.jpg";

const FoodMenuItem = ({ id, name, price, image, ingredients }) => {
  const [quantity, setQuantity] = useState(1);
  const { increaseBill, addOrderItem } = useContext(GlobalContext);
  // const imageUrl = `https://yummi-pizza-laravel.herokuapp.com/storage/pizzas/${image}`;
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
  return (
    <div className={styles.container}>
      <div className={styles.food_menu_item}>
        <img src={test_pizza_img} alt={name} />

        <div className={styles.row_item}>
          <h3>{name}</h3>
          <FiPlusCircle
            onClick={() => {
              setQuantity(quantity + 1);
            }}
            size="1.8em"
          />
        </div>

        <div className={styles.row_item}>
          <p>{ingredients}</p>
          <p>x{quantity}</p>
        </div>

        <div className={styles.row_item}>
          <p>{price}$</p>
          <FiMinusCircle
            size="1.8em"
            onClick={(e) => {
              if (quantity <= 1) e.preventDefault();
              else setQuantity(quantity - 1);
            }}
          />
        </div>

        <div className={styles.add_to_cart}>
          <button
            onClick={() => {
              addItemClickHandler();
            }}
          >
            Add to shoping cart
          </button>
        </div>

        {/* <div className={styles.food_menu_info}>
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
        </div> */}
        {/* <div className={styles.quantity}>
        
          <FiPlusCircle
            onClick={() => {
              setQuantity(quantity + 1);
            }}
            size="1.8em"
          />
          <p>{quantity}</p>
          <FiMinusCircle
            size="1.8em"
            onClick={(e) => {
              if (quantity <= 1) e.preventDefault();
              else setQuantity(quantity - 1);
            }}
          />
        </div> */}
      </div>
    </div>
  );
};

export default FoodMenuItem;
