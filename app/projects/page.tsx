import { Metadata } from "next";
import styles from "./page.module.css";
import ScrambleText from "../components/ScrambleText";

export const metadata: Metadata = {
  title: "Projects",
  // icons: "../favicon.ico",
};

export default function Page(props) {

  return (
    <main className={styles.main}>
      <h1>
        <ScrambleText>
          Projects
        </ScrambleText>
      </h1>
    </main>
  );
}
