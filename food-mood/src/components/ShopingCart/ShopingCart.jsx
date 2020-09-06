import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalState";
import Order from "../Order/Order";
import styles from "./ShopingCart.module.scss";
import OrderModal from "../Modals/OrderModal/OrderModal";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

const ShopingCart = () => {
  const { bill } = useContext(GlobalContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const extendCartClickHandler = (e) => {
    let currentArrow;
    let container;
    if (e.target.nodeName === "path") currentArrow = e.target.parentNode;
    else currentArrow = e.target;
    container = currentArrow.parentNode.parentNode;
    if (container.style.height !== "100%") {
      container.style.height = "100%";
      currentArrow.nextElementSibling.style.display = "block";
    } else {
      container.style.height = "63px";
      currentArrow.previousElementSibling.style.display = "block";
    }
    currentArrow.style.display = "none";
  };
  return (
    <div className={styles.container}>
      <OrderModal open={modalIsOpen} setModal={setModalIsOpen} bill={bill} />
      <div className={styles.cart_wrapper}>
        <h3>Shoping Cart</h3>
        <p>{bill}$</p>
        <MdKeyboardArrowUp
          color="white"
          size="2em"
          onClick={(e) => {
            extendCartClickHandler(e);
          }}
        />
        <MdKeyboardArrowDown
          onClick={(e) => {
            extendCartClickHandler(e);
          }}
          color="white"
          size="2em"
          display="none"
        />
      </div>
      <Order />
      <div className={styles.bill_wrapper}>
        <h3>Your bill</h3>
        <p>{bill}$</p>
      </div>
      <div className={styles.btn_wrapper}>
        <button
          style={bill <= 0 ? { background: "gray" } : { background: "coral" }}
          disabled={bill <= 0 ? true : false}
          onClick={() => {
            setModalIsOpen(true);
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default ShopingCart;
