import Image from "next/image";
import styles from "./page.module.css";
import Footer from "./components/footer";
import Header from "./components/header";
import { Metadata } from "next";
import Nossr from "./components/nossr";
import ScrambleText from "./components/ScrambleText";
export const metadata: Metadata = {
  title: "Rudidigital",
  description: "Homepage",
};

export default function Page(props) {
  return (
    <main className={styles.main}>
      <h1>
        <Nossr>
          <ScrambleText>Work in progress...</ScrambleText>
        </Nossr>
      </h1>
    </main>
  );
}
