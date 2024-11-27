import Image from "next/image";
import styles from "./page.module.css";
import { Metadata } from "next";
import Nossr from "./components/nossr";
import ScrambleText from "./components/ScrambleText";

export const metadata: Metadata = {
  title: "Rudidigital",
  description: "Homepage",
  icons: "favicon.ico",
};

export default function Page({ params }) {
  return (
    <main className={styles.main}>
      
        <h1>
          <Nossr>
            <ScrambleText>Ciao! Sono</ScrambleText>
          </Nossr>
        </h1>
        
        <div className={styles.logo}>
          <Image src="/rr.svg" alt="Rudidigital logo" fill />
        </div>
      
    </main>
  );
}
