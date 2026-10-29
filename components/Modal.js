import styles from "./Modal.module.css";

export default function Modal({ showSeparator = true }) {
  return (
    <article className={styles.modal} aria-labelledby="modal-card-title">
      {showSeparator && <span className={styles.separator} aria-hidden="true" />}
      <h3 id="modal-card-title" className={styles.title}>
        Hick&apos;s Law
      </h3>
      <p className={styles.description}>
        Jo flere valgmuligheder, jo længere tid tager det at vælge.
      </p>
    </article>
  );
}
