import styles from "../styles/Intro.module.css";
import Image from "next/image";

function Intro() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>
          <span className={styles.brand}>AV0CAD0 </span>DIGITAL PRODUCT AGENCY
        </h1>
        <p className={styles.description}>
          Create live segments and target the right people for messages based on
          their behaviors.
        </p>
        <button className={styles.button}>DISCOVER</button>
      </div>
      <div className={styles.card}>
        <Image src="/img/Avocado.png" layout="fill" objectFit="cover" alt="" />
      </div>
    </div>
  );
}

export default Intro;
