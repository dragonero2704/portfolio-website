"use client";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import styles from "./header.module.css";
import Link from "next/link";
import { readdirSync, statSync } from "fs";
import path, { join } from "path";
import Hamburger from "./Hamburger";

interface Path {
  href: string;
  name: string;
}

export default function Header() {
  const paths = [
    { href: "/", name: "Home" },
    { href: "/projects", name: "Projects" },
    { href: "/#contacts", name: "Contacts" },
  ] as Array<Path>;
  const curpath = usePathname();
  const menuToggle = (targetClass) => {
    const nav = document.querySelector("nav");
    nav.classList.toggle(targetClass);
    console.log(`Toggled class ${targetClass} on ${nav.tagName}`);
  };
  return (
    <header className={styles.header}>
      <nav className={[styles.nav, styles["nav-responsive"]].join(" ")}>
        {paths.map((path, id) => (
          <li
            key={id}
            className={[
              styles.link,
              curpath === path.href ? styles.active : "",
            ].join(" ")}
          >
            <Link href={path.href}>{path.name}</Link>
          </li>
        ))}
      </nav>
      <Hamburger callable={menuToggle.bind(null, styles["nav-responsive"])} />
    </header>
  );
}
