import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.cardL}>
        <h1 className={styles.title}>Av0cad0 Creatives.</h1>
        <h1 className={styles.linkTitle}>
          <Link href="/contact" passHref>
            <span className={styles.linkText}>Work with us</span>
          </Link>
          <Link href="/contact" passHref>
            <Image
              className={styles.linkText}
              src="/img/link.png"
              width="40px"
              height="40px"
              alt=""
            />
          </Link>
        </h1>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          12 Adam Street NY <br /> USA
        </div>
        <div className={styles.cardItem}>
          contact@example.com <br /> 123 1234 12332
        </div>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          Follow Us: <br />
          _FB _IN _BE _TW
        </div>
        <div className={styles.cardItem}>
          @ 2022 BY MAY, <br />
          All rights reserved
        </div>
      </div>
    </div>
  );
}

export default Footer;
