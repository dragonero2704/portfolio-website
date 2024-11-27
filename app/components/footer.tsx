import styles from "./footer.module.css";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.card}>
        Made with{" "}

        <span className={styles.logo}>
          <a href="https://nextjs.org/" target="_blank">
            <Image
              src="/next.svg"
              alt="nextjs logo"
              className={styles.nextjslogo}
              fill
            />
          </a>
        </span>
      </div>
    </footer>
  );
}
