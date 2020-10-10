import React from "react";
import styles from "./UserProfile.module.scss";

const UserProfile = () => {
  let user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className={styles.container}>
      {/* <nav>
        <ul>
          <li className={styles.selected}>Profile</li>
          <li>My Orders</li>
          <li>Online Payment</li>
        </ul>
      </nav> */}
      <div className={styles.user_profile}>
        <img src={user.imageUrl} alt={user.name} />
        <h4>{user.name}</h4>
      </div>
      <div className={styles.user_info_form}>
        <h3>Your personal info</h3>
        <p>Don't forget to save your changes</p>
        <form>
          <div className={styles.name_field}>
            <label htmlFor="email">Name</label>
            <input type="text" name="name" value={user.name} />
          </div>
          <div className={styles.phone_field}>
            <label htmlFor="phone">Phone</label>
            <input type="text" name="phone" />
          </div>
          <div className={styles.email_field}>
                <label htmlFor="email">E-address</label>
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  disabled={true}
                />
              </div>
          <input type="submit" value="Save" className={styles.submit_btn} />
        </form>
      </div>
      <div className={styles.change_password_form}>
        <h3>
          Change password
        </h3>
        <form>
        <div className={styles.current_password_field}>
            <label htmlFor="email">Current password</label>
            <input type="password" name="current_password"  />
          </div>
          <div className={styles.new_password_field}>
            <label htmlFor="email">New password</label>
            <input type="password" name="new_password"  />
          </div>
          <input type="submit" value="Save" className={styles.submit_btn} />
        </form>

      </div>
    </div>
  );
};

export default UserProfile;
