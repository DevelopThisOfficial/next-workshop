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
              href="/posts"
              className={`
                ${styles.navLink}
                ${pathname === "/posts" ? styles.active : styles.inactive}
            `}
            >
              Posts
            </Link>
          </li>
          <li>
            <Link
              href="/games"
              className={`
                ${styles.navLink}
                ${pathname === "/games" ? styles.active : styles.inactive}
            `}
            >
              Game
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`
                ${styles.navLink}
                ${pathname === "/contact" ? styles.active : styles.inactive}
            `}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
