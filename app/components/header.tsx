"use client";
import { usePathname } from "next/navigation";
import styles from "./header.module.css";

export default function Header() {

  const path = usePathname();

  return (
    <header className={styles.header}>
      <nav>{}</nav>
    </header>
  );
}
