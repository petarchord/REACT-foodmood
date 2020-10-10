import React from "react";
import styles from "./UserNavbar.module.scss";
import UserProfile from "../UserProfile/UserProfile";
import { Link } from "react-router-dom";
const UserNavbar = () => {
    return ( <div className={styles.container}>
       <nav>
        <ul>
          <li className={styles.active}>
          <Link 
          to="/profile"
          >
          Profile
          </Link>


          </li>
          <li>
            <Link
            to="/profile/orders"
            >
            My Orders
            </Link>
          </li>
          <li>
          <Link
          to="/profile/payment"
          >
          Online Payment
          </Link>

          </li>
        </ul>
      </nav>
      <UserProfile />

    </div> );
}
 
export default UserNavbar;