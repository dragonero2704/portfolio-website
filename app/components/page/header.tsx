"use client";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import styles from "./header.module.css";
import Link from "next/link";
import { readdirSync, statSync } from "fs";
import path, { join } from "path";

interface Path {
  href:string,
  name:string
}

export default function Header() {
  const paths = [
    { href: "/", name: "Home" },
    { href: "/projects", name: "Projects" },
    { href: "/contacts", name: "Contact" },
  ];
  const curpath = usePathname();
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {paths.map((path, id) => (
          <Link
            href={path.href}
            key={id}
            className={[
              styles.link,
              curpath === path.href ? styles.active : "",
            ].join(" ")}
          >
            {path.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
