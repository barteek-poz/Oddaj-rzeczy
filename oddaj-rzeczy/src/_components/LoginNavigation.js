"use client"
import Link from "next/link";
import { useState } from "react";
import styles from "../_styles/LoginNavigation.module.scss"


const LoginNavigation = () => {
    const [userIsLogged, setUserIsLogged] = useState(false)
    const loginHandler = () => {
        setUserIsLogged(true)
    }
    const logoutHandler = () => {
        setUserIsLogged(false)
    }
  return (
    <div className={styles.loginNav}>
      {userIsLogged ? <p>Cześć abcsdadsasdasdasdas@pl.pl</p> : null}
      {userIsLogged ? <Link href="/" className={styles.active}>Oddaj rzeczy</Link> : <Link href="/" onClick={loginHandler}>Zaloguj</Link>}
      {userIsLogged ? <Link href="/signout" onClick={logoutHandler}>Wyloguj</Link> : <Link href="/register" className={styles.active}>Załóż konto</Link>}
    </div>
  );
};

export default LoginNavigation;
