import classes from "./Navbar.module.scss";
import ActiveLink from "@/components/active-link/ActiveLink";

function Navbar(props) {
  return (
    <header className={classes.header}>
      <ul className={classes.navMobile}>
        <li>
          <ActiveLink href="/cards" activeClassName={classes.active}>
            <img src="images/navbar/icons/card.png" />
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/curses" activeClassName={classes.active}>
            <img src="images/navbar/icons/curse.png" />
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/tools" activeClassName={classes.active}>
            <img src="images/navbar/icons/tool.png" />
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/runes" activeClassName={classes.active}>
            <img src="images/navbar/icons/rune.png" />
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/charms" activeClassName={classes.active}>
            <img src="images/navbar/icons/charm.png" />
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/effects" activeClassName={classes.active}>
            <img src="images/navbar/icons/effect.png" />
          </ActiveLink>
        </li>
      </ul>
      <ul>
        <li>
          <ActiveLink href="/cards" activeClassName={classes.active}>
            <a>Cards</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/curses" activeClassName={classes.active}>
            <a>Curses</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/tools" activeClassName={classes.active}>
            <a>Tools</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/runes" activeClassName={classes.active}>
            <a>Runes</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/charms" activeClassName={classes.active}>
            <a>Charms</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/effects" activeClassName={classes.active}>
            <a>Status Effects</a>
          </ActiveLink>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
