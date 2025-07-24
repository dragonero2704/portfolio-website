import Image from "next/image";
import styles from "./page.module.css";
import { Metadata } from "next";
import ScrambleText from "../ui/animation/ScrambleText";
import Cycle from "../ui/animation/CycleText";

export const metadata: Metadata = {
  title: "Rudidigital",
  description: "Homepage",
  icons: "favicon.ico",
};

export default async function Page({ params }) {
  const text = ["Hello, I am", "Ciao, sono"];
  return (
    <>
      <section className={[styles.panel, styles.stretch].join(" ")}>
        <div className={styles.hero}>
          <h1 className="text-7xl">
            <Cycle>
              {text.map((t, id) => {
                return <ScrambleText key={id}>{t}</ScrambleText>;
              })}
            </Cycle>
          </h1>
          <h1 className="text-7xl font-semibold text-highlight-800">Roberto</h1>
        </div>

        <div className={styles.logo}>
          <Image src="/rr.svg" alt="Rudidigital logo" fill />
        </div>
      </section>
      <br/>
    </>
  );
}
