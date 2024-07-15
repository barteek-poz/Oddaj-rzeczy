import Link from "next/link";
import styles from "../_styles/MainNavigation.module.scss"
const navLinks = [
  { name: "Start", href: "#start" },
  { name: "O co chodzi?", href: "#idea" },
  { name: "O nas", href: "#about" },
  { name: "Fundacja i organizacje", href: "#organizations" },
  { name: "Kontakt", href: "#contact" },
];

const MainNavigation = () => {
  return (
    <nav>
      <ul className={styles.navigationList}>
        {navLinks.map((link) => {
          return (
            <li key={link.name}>
              <Link className={styles.navLink} href={link.href}>{link.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MainNavigation