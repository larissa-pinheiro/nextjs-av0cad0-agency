import Circle from "../components/Circle";
import styles from "../styles/Contact.module.css";

function Contact() {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="green" left="-40vh" top="-20vh" />
      <Circle backgroundColor="yellow" right="-30vh" bottom="-60vh" />
      <h1 className={styles.title}>Get in Touch</h1>
      <form className={styles.form}>
        <input type="text" className={styles.inputS} placeholder="Username" />
        <input type="number" className={styles.inputS} placeholder="Phone" />
        <input type="text" className={styles.inputL} placeholder="E-mail" />
        <input type="text" className={styles.inputL} placeholder="Subject" />
        <textarea className={styles.textarea} placeholder="Message" rows={6} />
        <button className={styles.button}>Submit</button>
      </form>
    </div>
  );
}

export default Contact;
