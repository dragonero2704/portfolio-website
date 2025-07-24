import styles from "./footer.module.css";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      {
        <div className={styles.card}>
          <Image
            src="/next.svg"
            alt="nextjs logo"
            className={styles.nextjslogo}
            width={80}
            height={35}
          />
        </div>
      }
    </footer>
  );
}
