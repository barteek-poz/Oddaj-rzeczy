"use client";
import Link from "next/link";
import styles from "../_styles/LoginNavigation.module.scss";
import LinkButton from "./LinkButton";
import { useLoginContext } from "@/_context/LoginContext";

const LoginNavigation = () => {
  const {userIsLogged, setUserIsLogged}= useLoginContext()
  console.log(userIsLogged);
  return (
    <div className={styles.loginNav}>
      {userIsLogged ? <p>Cześć abc@pl.pl</p> : null}
      {userIsLogged ? (
        <div className={styles.active}>
          <LinkButton href="/" active={false}>
            Oddaj rzeczy
          </LinkButton>
        </div>
      ) : (
        <LinkButton href="/login" active={false}>
          Zaloguj
        </LinkButton>
      )}
      {userIsLogged ? (
        <Link
        onClick={()=>{setUserIsLogged(false)}}
          href="/signout">
          Wyloguj
        </Link>
      ) : (
        <div className={styles.active}>
          <LinkButton href="/register">Załóż konto</LinkButton>
        </div>
      )}
    </div>
  );
};

export default LoginNavigation;
