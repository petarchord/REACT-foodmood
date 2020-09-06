import React, { useState, useContext } from "react";
import styles from "./OrderModal.module.scss";
import Modal from "react-modal";
import Loader from "../../Common/Loader/Loader";
import { GlobalContext } from "../../../context/GlobalState";
import { MdClear } from "react-icons/md";

Modal.setAppElement("#root");
const OrderModal = ({ open, setModal, bill }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const { order } = useContext(GlobalContext);
  const [loader, setLoader] = useState(false);
  const restrictCharacters = (e) => {
    if (
      (e.keyCode < 48 || e.keyCode > 57) &&
      (e.keyCode < 96 || e.keyCode > 105)
    ) {
      if (e.keyCode !== 8 && e.keyCode !== 107 && e.keyCode !== 9) {
        e.preventDefault();
      }
    }
  };
  const restrictDigits = (e) => {
    if (
      (e.keyCode < 65 || e.keyCode > 90) &&
      e.keyCode !== 8 &&
      e.keyCode !== 32 &&
      e.keyCode !== 16 &&
      e.keyCode !== 9
    ) {
      e.preventDefault();
    }
  };
  return (
    <div className={styles.container}>
      <Modal
        isOpen={open}
        onRequestClose={() => {
          setModal(false);
        }}
        className={styles.order_modal_content}
        overlayClassName={styles.order_modal_overlay}
        // style={{
        //   overlay: {
        //     position: "fixed",
        //     height: "fit-content",
        //     width: "95%",
        //     top: "2em",
        //     left: "0",
        //     right: "0",
        //     bottom: "0",
        //     margin: "0 auto",
        //   },
        //   content: {
        //     color: "black",
        //     border: "1px solid gray",
        //     background: "white",
        //     borderRadius: "4px",
        //     padding: "2em",
        //   },
        // }}
      >
        <div className={styles.header_exitbtn_wrapper}>
          <h3>Enter your information</h3>
          <MdClear
            color="gray"
            size="1.2em"
            onClick={() => {
              setModal(false);
            }}
          />
        </div>

        {/* <button
          onClick={() => {
            setModal(false);
          }}
          id={styles.cancel_button}
        >
          x
        </button> */}
        {loader ? (
          <div className={styles.loader_wrapper}>
            <Loader />
          </div>
        ) : (
          ""
        )}
        <form
        //   onSubmit={(e) => {
        //     orderSubmit(e);
        //   }}
        >
          <div className={styles.input_group}>
            <div className={styles.name_field}>
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                name="name"
                required
                onChange={(e) => {
                  setName(e.target.value);
                }}
                onKeyDown={(e) => {
                  restrictDigits(e);
                }}
              />
            </div>
            <div className={styles.address_field}>
              <label htmlFor="address">Address: </label>
              <input
                type="text"
                name="address"
                required
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>
            <div className={styles.phone_field}>
              <label htmlFor="phone">Phone: </label>
              <input
                type="text"
                name="phone"
                required
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                onKeyDown={(e) => {
                  restrictCharacters(e);
                }}
              />
            </div>
            <div className={styles.bill}>
              <p>Your bill</p>
              <p>{bill}$</p>
            </div>
            <input
              type="submit"
              value="Confirm your order"
              className={styles.submit_btn}
            />
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default OrderModal;
