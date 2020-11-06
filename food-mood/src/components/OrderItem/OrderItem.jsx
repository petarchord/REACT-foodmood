import React, { useContext } from "react";

import styles from "./OrderItem.module.scss";
import { GlobalContext } from "../../context/GlobalState";
import { TiDeleteOutline } from "react-icons/ti";

const OrderItem = ({ id, name,ingredients ,price, image, quantity }) => {
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
  <p>{ingredients}</p>
          <p>{price}$</p>
        </div>
        <div className={styles.btn_quantity_wrapper}>
          {/* <button
            onClick={() => {
              removeItemClickHandler();
            }}
          >
            x
          </button> */}
          <TiDeleteOutline 
          onClick={() => {
            removeItemClickHandler();
          }}
          size="1.8em"
          color="white"
          />
         
          <p>x{quantity}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
