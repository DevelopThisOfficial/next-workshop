"use client";

import styles from "./Header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import { useState } from "react";

const Header = (): JSX.Element => {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.headerStyles}>
      <div className={styles.myName}>Jude Clark</div>

      <div
        className={styles.mobileMenuIcon}
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
      >
        {isMenuOpen ? (
          <Cross1Icon
            style={{
              transform: "scale(2)",
            }}
          />
        ) : (
          <HamburgerMenuIcon
            style={{
              transform: "scale(2)",
            }}
          />
        )}
      </div>
      <ul
        className={`${styles.navLinks} ${
          isMenuOpen ? styles.open : styles.closed
        }`}
      >
        <li>
          <Link
            href="/"
            className={`
              ${styles.navLink}
                ${pathname === "/" ? styles.active : styles.inactive}
            `}
            onClick={() => {
              setIsMenuOpen(false);
            }}
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
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            Posts
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
