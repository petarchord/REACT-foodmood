import React, { useState } from "react";
import styles from "./SignInModal.module.scss";
import Modal from "react-modal";
import { MdClear } from "react-icons/md";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { SiFacebook } from "react-icons/si";
import { GoMail } from "react-icons/go";

Modal.setAppElement("#root");
const SignInModal = ({ open, setModal }) => {
  const [currentLayout, setCurrentLayout] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const renderCurrentLayout = () => {
    switch (currentLayout) {
      case 0: {
        return (
          <div className={styles.signin_wrapper}>
            <div className={styles.header_exitbtn_wrapper}>
              <h3>
                Sign in to
                <span style={{ color: "coral" }}> food mood</span>
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
                    style={{
                      width: "18px",
                      height: "18px",
                      marginRight: "15px",
                    }}
                    color="darkblue"
                  />
                }
                // className={styles.fb_btn}
              />
            </div>
            <p className={styles.or_divider}>or</p>
            <button
              className={styles.signin_btn}
              onClick={() => {
                setCurrentLayout(1);
              }}
            >
              <GoMail
                style={{ width: "18px", height: "18px", marginRight: "15px" }}
              />
              <span>Sign in with e-address</span>
            </button>
            <p className={styles.sign_up}>
              You don't have an account?{" "}
              <a
                onClick={() => {
                  setCurrentLayout(2);
                }}
              >
                Sign up here.
              </a>{" "}
            </p>
          </div>
        );
      }
      case 1: {
        return (
          <div className={styles.signin_wrapper}>
            <div className={styles.header_exitbtn_wrapper}>
              <h3>
                Sign in to
                <span style={{ color: "coral" }}> food mood</span>
              </h3>
              <MdClear
                color="gray"
                size="1.2em"
                onClick={() => {
                  setModal(false);
                }}
              />
            </div>
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
            <p className={styles.sign_up}>
              You don't have an account?{" "}
              <a
                onClick={() => {
                  setCurrentLayout(2);
                }}
              >
                Sign up here.
              </a>{" "}
            </p>
            <p className={styles.sign_up}>
              You want to sign in using facebook or google?
              <a
                onClick={() => {
                  setCurrentLayout(0);
                }}
              >
                Back
              </a>
            </p>
          </div>
        );
      }
      case 2: {
        return (
          <div className={styles.signin_wrapper}>
            <div className={styles.header_exitbtn_wrapper}>
              <h3>
                Sign up to
                <span style={{ color: "coral" }}> food mood</span>
              </h3>
              <MdClear
                color="gray"
                size="1.2em"
                onClick={() => {
                  setModal(false);
                }}
              />
            </div>
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
                value="Sign up"
                className={styles.submit_btn}
              />
            </form>
            <p className={styles.sign_up}>
              You already have an account?
              <a
                onClick={() => {
                  setCurrentLayout(0);
                }}
              >
                Sign in here.
              </a>
            </p>
          </div>
        );
      }
    }
  };

  const responseGoogle = (response) => {
    const {
      email,
      familyName,
      givenName,
      imageUrl,
      name,
    } = response.profileObj;
    const user = { email, familyName, givenName, imageUrl, name };
    localStorage.setItem("user", JSON.stringify(user));
    setModal(false);
  };

  const responseFacebook = (response) => {
    console.log(response);
    const imageUrl = response.picture.data.url;
    const { email, name } = response;
    const user = { email, name, imageUrl };
    localStorage.setItem("user", JSON.stringify(user));
    setModal(false);
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
        {renderCurrentLayout()}
      </Modal>
    </div>
  );
};

export default SignInModal;
