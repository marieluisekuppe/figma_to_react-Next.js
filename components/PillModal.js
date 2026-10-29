"use client";

import { useRef } from "react";
import Modal from "./Modal";
import Pill from "./Pill";
import styles from "./PillModal.module.css";

export default function PillModal() {
  const dialogRef = useRef(null);

  function openModal() {
    dialogRef.current?.showModal();
  }

  function closeOnBackdrop(event) {
    if (event.target === event.currentTarget) {
      event.currentTarget.close();
    }
  }

  return (
    <>
      <div className={styles.triggers}>
        <Pill type="primary" onClick={openModal} />
        <Pill type="secondary" onClick={openModal} />
      </div>
      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-labelledby="modal-card-title"
        onClick={closeOnBackdrop}
      >
        <Modal />
      </dialog>
    </>
  );
}
