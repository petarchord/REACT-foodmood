import React from "react";
import styles from "./SignInModal.module.scss";
import Modal from "react-modal";
import { MdClear } from "react-icons/md";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";

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
            <div className={styles.google_btn}>
              <GoogleLogin
                clientId="37721926306-04lhbdhm6b4btbifcg2987jvcdfgec5r.apps.googleusercontent.com"
                buttonText="Sign in with google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
              />
            </div>
            <div className={styles.fb_btn}>
              <FacebookLogin
                appId="778201083011422"
                autoLoad={true}
                fields="name,email,picture"
                textButton="Sign in with facebook"
                callback={responseFacebook}
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SignInModal;
