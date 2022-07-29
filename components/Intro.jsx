import styles from "../styles/Intro.module.css";
import Image from "next/image";
import Circle from "./Circle.jsx";

function Intro() {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="#b0ff49" left="-45vh" top="-45vh" />
      <Circle backgroundColor="#0ff49b" right="-40vh" />
      <div className={styles.card}>
        <h1 className={styles.title}>
          <span className={styles.brand}>AV0CAD0 </span>DIGITAL PRODUCT AGENCY
        </h1>
        <p className={styles.description}>
          Create live segments and target the right people for messages based on
          their behaviors.
        </p>
        <button className={styles.button}>discover</button>
      </div>
      <div className={styles.card}>
        <Image
          src="/img/Avocado.png"
          layout="fill"
          objectFit="cover"
          alt="A man sitting and smiling. Under him you can see the Avocado logo"
        />
      </div>
    </div>
  );
}

export default Intro;
