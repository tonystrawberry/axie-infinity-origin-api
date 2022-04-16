import classes from "./Navbar.module.scss";
import Link from "next/link";
import { withRouter } from "next/router";
import ActiveLink from "@/components/active-link/ActiveLink";

function Navbar(props) {
  const { router } = props;
  console.log("router", router);
  return (
    <header className={classes.header}>
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

export default withRouter(Navbar);
