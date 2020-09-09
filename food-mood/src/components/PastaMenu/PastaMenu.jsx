import React from "react";
import styles from "./PastaMenu.module.scss";
import PastaMenuItem from "../PastaMenuItem/PastaMenuItem";
import ShopingCart from "../ShopingCart/ShopingCart";

const PastaMenu = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.pasta_menu_title}>
        Order your favourite pasta in less than a minute.
      </h3>
      <PastaMenuItem
        key={0}
        id={0}
        name="Napolitana"
        price={12}
        image="tuna.jpg"
      />
      <PastaMenuItem
        key={1}
        id={1}
        name="Carbonara"
        price={11}
        image="napolitana.jpg"
      />
      <PastaMenuItem
        key={2}
        id={2}
        name="Bolognese"
        price={11.5}
        image="chili.jpg"
      />

      <PastaMenuItem
        key={3}
        id={3}
        name="Alfredo Tachini"
        price={11.5}
        image="kalimero.jpg"
      />

      <ShopingCart />
    </div>
  );
};

export default PastaMenu;
