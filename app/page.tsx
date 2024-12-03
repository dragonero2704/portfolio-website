import Image from "next/image";
import styles from "./page.module.css";
import { Metadata } from "next";
import Nossr from "./components/nossr";
import ScrambleText from "./components/ScrambleText";
import Cycle from "./components/CycleText";

export const metadata: Metadata = {
  title: "Rudidigital",
  description: "Homepage",
  icons: "favicon.ico",
};

export default function Page({ params }) {
  const text = ["Hello, I am", "Ciao, sono"];

  return (
    <section className={styles.panel}>
      <div className={styles.card}>
        <h1>
          <Cycle>
            {text.map((t, id) => (
              <ScrambleText key={id}>{t}</ScrambleText>
            ))}
          </Cycle>
        </h1>
        <h1 className="highlight">Roberto</h1>
      </div>

      <div className={[styles.logo, styles.logoimage].join(" ")}>
        <Image src="/rr.svg" alt="Rudidigital logo" fill />
      </div>
    </section>
  );
}
