import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import Card from "./Card";

import styles from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return <div onClick={props.onConfirm} className={styles.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onConfirm}>OK</Button>
      </footer>
    </Card>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
        onConfirm={props.onConfirm}
          message={props.message}
          title={props.title}
        />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default Modal;
