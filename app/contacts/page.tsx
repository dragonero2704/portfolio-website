import { Metadata } from "next";
import styles from "./page.module.css";
import ScrambleText from "../../src/animation/ScrambleText";

export const metadata: Metadata = {
  title: "Projects",
  // icons: "../favicon.ico",
};

export default function Page(props) {
  return (
    <h1>
      <ScrambleText>Contacts</ScrambleText>
    </h1>
  );
}
