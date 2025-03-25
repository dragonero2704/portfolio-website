import Image from "next/image";
import styles from "./page.module.css";
import { Metadata } from "next";
import Nossr from "../components/nossr";
import ScrambleText from "../components/animation/ScrambleText";
import Cycle from "../components/animation/CycleText";

export const metadata: Metadata = {
  title: "Rudidigital",
  description: "Homepage",
  icons: "favicon.ico",
};

export default function Page({ params }) {
  const text = ["Hello, I am", "Ciao, sono"];

  return (
    <>
      <section className={[styles.panel, styles.stretch].join(" ")}>
        <div className={styles.card}>
          <h1 className="font-size-5-rem">
            <Cycle>
              {text.map((t, id) => {
                return <ScrambleText key={id}>{t}</ScrambleText>;
              })}
            </Cycle>
          </h1>
          <h1 className="highlight font-size-5-rem">Roberto</h1>
        </div>

        <div className={styles.logo}>
          <Image src="/rr.svg" alt="Rudidigital logo" fill />
        </div>
      </section>
      <section className={styles.panel}>

      </section>
    </>
  );
}
