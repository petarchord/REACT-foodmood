import React from "react";
import styles from "./UserProfile.module.scss";

const UserProfile = () => {
  let user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className={styles.container}>
      <nav>
        <ul>
          <li className={styles.selected}>Profile</li>
          <li>My Orders</li>
          <li>Online Payment</li>
        </ul>
      </nav>
      <div className={styles.user_profile}>
        <img src={user.imageUrl} alt={user.name} />
        <h4>{user.name}</h4>
      </div>
      <div className={styles.user_info_form}>
        <form>
          <div className={styles.email_field}>
            <label htmlFor="email">Name</label>
            <input type="text" name="name" value={user.name} />
          </div>
          <div className={styles.phone_field}>
            <label htmlFor="phone">Phone</label>
            <input type="text" name="phone" />
          </div>
          <input type="submit" value="Save" className={styles.submit_btn} />
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
