import React, { useContext } from "react";
import styles from "./Order.module.scss";
import { GlobalContext } from "../../context/GlobalState";
import OrderItem from "../OrderItem/OrderItem";
const Order = () => {
  const { order } = useContext(GlobalContext);
  return (
    <div className={styles.container}>
      {order.map((orderItem) => (
        <OrderItem
          key={orderItem.id}
          id={orderItem.id}
          name={orderItem.name}
          ingredients= {orderItem.ingredients}
          price={orderItem.price}
          image={orderItem.image}
          quantity={orderItem.quantity}
        />
      ))}
    </div>
  );
};

export default Order;
