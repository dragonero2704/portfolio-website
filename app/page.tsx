import Image from "next/image";
import styles from "./page.module.css";
import Footer from "./components/footer";
import Header from "./components/header";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Rudidigital",
  description: "Homepage",
};

export default function Home(props) {
  return (
    <main className={styles.main}>
      <h1>Work in progress... </h1>
    </main>
  );
}
