"use client";

import styles from "./Header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = (): JSX.Element => {
  const pathname = usePathname();

  return (
    <header className={styles.headerStyles}>
      <div className={styles.myName}>Jude Clark</div>
      <div>
        <ul className={styles.navLinks}>
          <li>
            <Link
              href="/"
              className={`
                ${styles.navLink}
                ${pathname === "/" ? styles.active : styles.inactive}
            `}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className={`
                ${styles.navLink}
                ${pathname === "/projects" ? styles.active : styles.inactive}
            `}
            >
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
