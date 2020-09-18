import React from "react";
import styles from "./UserProfile.module.scss";

const UserProfile = () => {
  let user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className={styles.container}>
      <div className={styles.user_profile}>
        <img src={user.imageUrl} alt={user.name} />
        <h4>{user.name}</h4>
      </div>
      <div className={styles.user_info_form}></div>
    </div>
  );
};

export default UserProfile;
