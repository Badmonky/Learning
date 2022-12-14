import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import Card from "./Card";

import styles from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return <div onClick={props.onDismiss} className={styles.backdrop}></div>;
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
        <Button onClick={props.onDismiss}>OK</Button>
      </footer>
    </Card>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onDismiss={props.onDismiss} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onDismiss={props.onDismiss} />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default Modal;
