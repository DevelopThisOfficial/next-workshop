"use client";

import styles from "./Header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const Header = (): JSX.Element => {
  const pathname = usePathname();

  return (
    <header className={styles.headerStyles}>
      <div className={styles.headerTitle}>DevelopThis Next.js</div>
      <div>
        {/* <HamburgerMenuIcon /> */}
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
