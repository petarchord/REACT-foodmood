import React, {useState} from "react";
import styles from "./UserNavbar.module.scss";
import UserProfile from "../UserProfile/UserProfile";
import { Link } from "react-router-dom";
const UserNavbar = () => {
    const [selected ,setSelected] = useState(0);
    return ( <div className={styles.container}>
       <nav>
        <ul>
          <li className={selected === 0 ? styles.active : ""}>
          <Link
          onClick = {() => {setSelected(0)}} 
          to="/profile"
          >
          Profile
          </Link>


          </li>
          <li className={selected === 1 ? styles.active : ""}>
            <Link
            onClick={() => {setSelected(1)}}
            to="/profile/orders"
            >
            My Orders
            </Link>
          </li>
          <li className={selected === 2 ? styles.active : ""}>
          <Link
          onClick = {() => {setSelected(2)}}
          to="/profile/payment"
          >
          Online Payment
          </Link>

          </li>
        </ul>
      </nav>
      {selected === 0 ? <UserProfile /> : ""}

    </div> );
}
 
export default UserNavbar;