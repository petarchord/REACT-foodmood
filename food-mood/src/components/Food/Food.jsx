import React from "react";
import styles from "./Food.module.scss";
import FoodItem from "../FoodItem/FoodItem";

import pizza_img from "../../images/pizzas.jpg";
import burger_img from "../../images/burger.jpg";
import pasta_img from "../../images/pasta.jpg";
import { Link } from "react-router-dom";

const Food = () => {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <Link to="/pizzamenu">
            <FoodItem
              name="Pizza"
              desc="Check out our hot pizzas"
              img={pizza_img}
            />
          </Link>
        </li>
        <li>
          <Link to="/burgermenu">
            <FoodItem
              name="Burger"
              desc="Check out our delishes burgers"
              img={burger_img}
            />
          </Link>
        </li>
        <li>
          <Link to="/pastamenu">
            <FoodItem
              name="Pasta"
              desc="Check out our pastas"
              img={pasta_img}
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Food;
