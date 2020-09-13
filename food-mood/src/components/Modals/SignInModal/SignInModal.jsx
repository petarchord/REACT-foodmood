import React from "react";
import styles from "./SignInModal.module.scss";
import Modal from "react-modal";
import { MdClear } from "react-icons/md";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { SiFacebook } from "react-icons/si";

Modal.setAppElement("#root");
const SignInModal = ({ open, setModal }) => {
  const responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
  };

  const responseFacebook = (response) => {
    console.log(response);
  };

  return (
    <div className={styles.container}>
      <Modal
        isOpen={open}
        onRequestClose={() => {
          setModal(false);
        }}
        className={styles.signin_modal_content}
        overlayClassName={styles.signin_modal_overlay}
      >
        <div className={styles.signin_wrapper}>
          <div className={styles.header_exitbtn_wrapper}>
            <h3>
              Sign in to <span style={{ color: "coral" }}>food mood</span>
            </h3>
            <MdClear
              color="gray"
              size="1.2em"
              onClick={() => {
                setModal(false);
              }}
            />
          </div>
          <div className={styles.google_fb_wrapper}>
            <GoogleLogin
              clientId="37721926306-04lhbdhm6b4btbifcg2987jvcdfgec5r.apps.googleusercontent.com"
              buttonText="Sign in with google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
              className={styles.google_btn}
            />
            <FacebookLogin
              appId="778201083011422"
              autoLoad={false}
              fields="name,email,picture"
              textButton="Sign in with facebook"
              callback={responseFacebook}
              cssClass={styles.fb_btn}
              icon={
                <SiFacebook
                  style={{ width: "18px", height: "18px", marginRight: "15px" }}
                  color="darkblue"
                />
              }
              // className={styles.fb_btn}
            />
          </div>
          <p className={styles.or_divider}>or</p>
          <form>
            <div className={styles.email_field}>
              <label htmlFor="email">E-address</label>
              <input
                type="email"
                name="email"
                placeholder="Email address"
                required
              />
            </div>
            <div className={styles.password_field}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            <input
              type="submit"
              value="Sign in"
              className={styles.submit_btn}
            />
          </form>
          {/* <div>
            <p></p>
            <a href=""></a>
          </div> */}
          <p className={styles.sign_up}>
            You don't have an account? <a href="#">Sign up here.</a>{" "}
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default SignInModal;
