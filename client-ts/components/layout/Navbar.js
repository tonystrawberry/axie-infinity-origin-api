import classes from "./Navbar.module.scss";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  return (
    <header className={classes.header}>
      <ul>
        <li>
          <Link href="/cards">Cards</Link>
        </li>
        <li>
          <Link href="/curses">Curses</Link>
        </li>
        <li>
          <Link href="/tools">Tools</Link>
        </li>
        <li>
          <Link href="/runes">Runes</Link>
        </li>
        <li>
          <Link href="/charms">Charms</Link>
        </li>
        <li>
          <Link href="/status-effects">Status Effects</Link>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
