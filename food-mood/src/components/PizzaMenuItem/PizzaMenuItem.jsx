import React, { useState, useContext } from "react";
import styles from "./PizzaMenuItem.module.scss";
import { GlobalContext } from "../../context/GlobalState";

const PizzaMenuItem = ({ id, name, price, image }) => {
  const [quantity, setQuantity] = useState(1);
  const { increaseBill, addOrderItem } = useContext(GlobalContext);
  const imageUrl = `https://yummi-pizza-laravel.herokuapp.com/storage/pizzas/${image}`;
  const addItemClickHandler = () => {
    const bill = quantity * price;
    increaseBill(bill);
    const menuItem = {
      id,
      name,
      price,
      image,
      quantity,
    };
    addOrderItem(menuItem);
  };

  return (
    <div className={styles.container}>
      <div className={styles.pizza_menu_item}>
        <div className={styles.pizza_menu_img}>
          <img src={imageUrl} alt="" />
        </div>
        <div className={styles.pizza_menu_info}>
          <h3>{name}</h3>
          <p>{price}€</p>
          <button
            onClick={() => {
              addItemClickHandler();
            }}
          >
            Add to shoping cart
          </button>
        </div>
        <div className={styles.quantity}>
          <button
            onClick={() => {
              setQuantity(quantity + 1);
            }}
          >
            +
          </button>
          <p>{quantity}</p>
          <button
            onClick={() => {
              setQuantity(quantity - 1);
            }}
            disabled={quantity <= 1 ? true : false}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaMenuItem;
