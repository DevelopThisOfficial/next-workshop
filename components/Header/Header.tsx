"use client";

import styles from "./Header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

const Header = (): JSX.Element => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className={styles.headerStyles}>
      <div className={styles.headerTitle}>DevelopThis Next.js</div>
      <div
        className={styles.mobileMenuIcon}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <Cross1Icon /> : <HamburgerMenuIcon />}
      </div>
      <ul
        className={`${styles.navLinks} ${
          isMobileMenuOpen ? styles.open : styles.closed
        }`}
      >
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
      </ul>
    </header>
  );
};

export default Header;
