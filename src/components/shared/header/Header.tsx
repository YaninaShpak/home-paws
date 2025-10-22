"use client";

import styles from "./Header.module.css";
import Link from "next/link";
import { navigationItem } from "@/consts/navigation";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathName = usePathname();

  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/">
        LOGO
      </Link>
      <nav className={styles.userNavigation}>
        {navigationItem.map((item) => {
          const isActiveItem = item.link === pathName;
          return (
            <Link
              key={item.link}
              className={`${styles.link} ${isActiveItem ? styles.active : ""}`}
              href={item.link}
            >
              {item.text}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
