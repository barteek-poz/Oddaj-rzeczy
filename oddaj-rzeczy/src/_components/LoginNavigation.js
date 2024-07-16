"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "../_styles/LoginNavigation.module.scss";
import LinkButton from "./LinkButton";

const LoginNavigation = () => {
  const [userIsLogged, setUserIsLogged] = useState(false);
  const loginHandler = () => {
    setUserIsLogged(true);
  };
  const logoutHandler = () => {
    setUserIsLogged(false);
  };
  return (
    <div className={styles.loginNav}>
      {userIsLogged ? <p>Cześć abcsdadsasdasdasdas@pl.pl</p> : null}
      {userIsLogged ? (
        <div className={styles.active}>
          <LinkButton href="/" active={false}>
            Oddaj rzeczy
          </LinkButton>
        </div>
      ) : (
        <LinkButton href="/login" active={false} >
          Zaloguj
        </LinkButton>
      )}
      {userIsLogged ? (
        <Link href="/signout" >
          Wyloguj
        </Link>
      ) : (
        <div className={styles.active}>
          <LinkButton href="/register" >
            Załóż konto
          </LinkButton>
        </div>
      )}
    </div>
  );
};

export default LoginNavigation;
