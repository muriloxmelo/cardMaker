import React from "react";
import styles from "./Header.module.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import LogoHeader from "./LogoHeader";

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const { pathname } = useLocation();
  React.useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className={styles.header}>
      <nav
        className={`${
          menuOpen ? styles.navMobileActive : styles.nav
        } container`}
      >
        <Link to="/">
          <LogoHeader />
        </Link>
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            menuOpen && styles.mobileButtonActive
          }`}
          onClick={() => {
            setMenuOpen(!menuOpen);
            console.log(menuOpen);
          }}
        ></button>

        <ul className={styles.div__headerButton}>
          <NavLink className={styles.headerButton} to="/create">
            Create a card
          </NavLink>

          <NavLink className={styles.headerButton} to="/cards">
            All cards created
          </NavLink>
        </ul>
        <li className={styles.headerButtonGit}>
          <NavLink
            className={styles.headerButton}
            to="https://github.com/muriloxmelo/cardMaker"
            target="_blank"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.4988 0.416687C5.82722 0.416687 0.416626 5.82657 0.416626 12.5004C0.416626 17.8383 3.87855 22.3677 8.68013 23.9662C9.28469 24.0767 9.505 23.7036 9.505 23.3832C9.505 23.0961 9.49461 22.3365 9.48868 21.3284C6.12764 22.0583 5.4185 19.7084 5.4185 19.7084C4.86883 18.3123 4.07661 17.9407 4.07661 17.9407C2.97951 17.1915 4.15969 17.2063 4.15969 17.2063C5.37251 17.2916 6.01044 18.4518 6.01044 18.4518C7.08826 20.2981 8.83888 19.7647 9.52725 19.4554C9.63704 18.675 9.94933 18.1424 10.2943 17.8405C7.61122 17.5349 4.79021 16.4986 4.79021 11.8684C4.79021 10.5488 5.26124 9.47097 6.03418 8.62607C5.90956 8.32045 5.4949 7.09203 6.15287 5.4282C6.15287 5.4282 7.16688 5.1033 9.47532 6.66624C10.4389 6.39845 11.473 6.26493 12.5003 6.25974C13.527 6.26493 14.5603 6.39845 15.5253 6.66624C17.8323 5.1033 18.8448 5.4282 18.8448 5.4282C19.5043 7.09203 19.0896 8.32045 18.9657 8.62607C19.7402 9.47097 20.2075 10.5488 20.2075 11.8684C20.2075 16.5105 17.382 17.5319 14.6908 17.8309C15.124 18.204 15.5105 18.9413 15.5105 20.0689C15.5105 21.6837 15.4957 22.9871 15.4957 23.3832C15.4957 23.7066 15.7138 24.0827 16.3265 23.9647C21.1243 22.3632 24.5833 17.8376 24.5833 12.5004C24.5833 5.82657 19.1727 0.416687 12.4988 0.416687"
                fill="currentColor"
              />
            </svg>
          </NavLink>
        </li>
      </nav>
    </header>
  );
};

export default Header;
