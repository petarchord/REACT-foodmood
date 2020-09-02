import React, { useContext } from "react";
import down_arrow from "../../images/down-arrow.svg";
import { GlobalContext } from "../../context/GlobalState";
import Order from "../Order/Order";
import styles from "./ShopingCart.module.scss";

const ShopingCart = () => {
  const { bill } = useContext(GlobalContext);
  return (
    <div className={styles.container}>
      <div className={styles.cart_wrapper}>
        <h3>Shoping Cart</h3>
        <p>{bill}$</p>
        <img className={styles.down_arrow} src={down_arrow} alt="down arrow" />
      </div>
      <Order />
      <div className={styles.bill_wrapper}>
        <h3>Your bill</h3>
        <p>{bill}$</p>
      </div>
      <div className={styles.btn_wrapper}>
        <button>Continue</button>
      </div>
    </div>
  );
};

export default ShopingCart;
