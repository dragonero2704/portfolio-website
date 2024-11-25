import styles from "./footer.module.css";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_card}>
        <span className={styles.logo_container}>
          <a href="https://nextjs.org/" target="_blank">
            <Image
              src="/next.svg"
              alt="nextjs logo"
              className={styles.logo}
                fill
            />
          </a>
        </span>
      </div>
    </footer>
  );
}
