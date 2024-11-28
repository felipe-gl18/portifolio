import styles from "./Contactme.module.css";
export default function Contactme({ handleModalIsOpen, modalIsOpen }) {
  return (
    <>
      {modalIsOpen ? (
        <div className={styles.contactme_container}>
          <form
            action="https://formspree.io/f/mldepvny"
            method="POST"
            className={styles.contactme}
          >
            <div onClick={handleModalIsOpen} className={styles.close}>
              <img src="/icons/Close.png" alt="" />
            </div>
            <div>
              <label htmlFor="email">Your email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div>
              <label htmlFor="message">Your message</label>
              <textarea name="message" id="message"></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      ) : null}
    </>
  );
}
