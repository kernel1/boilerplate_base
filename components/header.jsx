import Link from "next/link";
import styles from "./scss/header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/login">
              <a>login</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
