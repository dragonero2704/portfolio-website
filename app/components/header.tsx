"use client";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import styles from "./header.module.css";
import Link from "next/link";
import { readdirSync, statSync } from "fs";
import path, { join } from "path";

export default function Header() {
  // const paths = readdirSync(__dirname).filter((path) => {
  //   const stat = statSync(join(__dirname, path));
  //   console.log(join(__dirname, path))
  //   if (stat.isDirectory()) {
  //     return readdirSync(join(__dirname, path)).includes("page.js");
  //   }
  //   return false;
  // });
  // console.log(paths)
  const paths = [
    { href: "/", name: "Home" },
    { href: "/projects", name: "Projects" },
  ];
  const curpath = usePathname();
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {paths.map((path) => (
          <li key={path.href}>
            <Link
              href={path.href}
              className={[
                styles.link,
                curpath === path.href ? styles.active : "",
              ].join(" ")}
            >
              {path.name}
            </Link>
          </li>
        ))}
      </nav>
    </header>
  );
}
