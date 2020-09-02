import React, { useContext } from "react";

import styles from "./OrderItem.module.scss";
import { GlobalContext } from "../../context/GlobalState";

const OrderItem = ({ id, name, price, image, quantity }) => {
  const { removeOrderItem } = useContext(GlobalContext);
  const imageUrl = `https://yummi-pizza-laravel.herokuapp.com/storage/pizzas/${image}`;

  const removeItemClickHandler = () => {
    const item = {
      id,
      name,
      price,
      quantity,
    };
    removeOrderItem(item);
  };

  return (
    <div className={styles.container}>
      <div className={styles.order_item}>
        <img src={imageUrl} alt="" />
        <div className={styles.info_wrapper}>
          <h3>{name}</h3>
          <p>{price}</p>
        </div>
        <div className={styles.btn_quantity_wrapper}>
          <button
            onClick={() => {
              removeItemClickHandler();
            }}
          >
            x
          </button>
          <p>x{quantity}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
