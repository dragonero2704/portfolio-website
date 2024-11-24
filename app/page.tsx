import Image from "next/image";
import styles from "./page.module.css";
import Footer from "./components/footer";
import Header from "./components/header";
export const metadata = {
  title: "Rudidigital",
  description: "Homepage",
};

export default function Home(props) {
  return (
    <>
    <Header/>
    <main className={styles.main}>
      <h1>Work in progress...</h1>
    </main>
    <Footer/>
    </>
  );
}
