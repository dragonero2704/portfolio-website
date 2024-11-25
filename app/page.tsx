
import Image from "next/image";
import styles from "./page.module.css";
import Footer from "./components/footer";
import Header from "./components/header";
import { Metadata } from "next";
import AnimatedText from "./components/anitedtext";
import Nossr from "./components/nossr";
export const metadata: Metadata = {
  title: "Rudidigital",
  description: "Homepage",
};

export default function Home(props) {
  return (
    <main className={styles.main}>
      <h1>Work in progress... </h1>
      <Nossr>
        <AnimatedText content="sium"/>
      </Nossr>
    </main>
  );
}
