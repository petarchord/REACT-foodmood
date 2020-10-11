import React from "react";
import { Link } from "react-router-dom";
import styles from "./UserOrders.module.scss";

const UserOrders = () => {
    return ( <div className={styles.container}>
<h3>Your orders</h3>
<div className={styles.orders}>
    <p>You don't have any orders yet. What is your <span style={{color:"coral",fontWeight:"bold"}}>food mood</span> today? </p>
    <Link
    to="/"
    >
    Start your order
    </Link>


</div>

    </div> );
}
 
export default UserOrders;