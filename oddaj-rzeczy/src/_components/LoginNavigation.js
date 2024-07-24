"use client";
import Link from "next/link";
import styles from "../_styles/LoginNavigation.module.scss";
import LinkButton from "./LinkButton";
import { useLoginContext } from "@/_context/LoginContext";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginNavigation = () => {
  const { data, status } = useSession();
  const { userIsLogged, setUserIsLogged, userEmail } = useLoginContext();
  const router = useRouter();
  return (
    <div className={styles.loginNav}>
      {status === "authenticated" ? <p>Cześć {data.user.email}</p> : null}
      {status === "authenticated" ? (
        <div className={styles.active}>
          <LinkButton href="/oddaj-rzeczy" active={false}>
            Oddaj rzeczy
          </LinkButton>
        </div>
      ) : (
        <LinkButton href="/login" active={false}>
          Zaloguj
        </LinkButton>
      )}
      {status === "authenticated" ? (
        <Link
          onClick={() => signOut({ callbackUrl: "/signout" })}
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
