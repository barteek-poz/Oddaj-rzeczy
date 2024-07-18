"use client";
import { useLoginContext } from "@/_context/LoginContext";
import styles from "../_styles/LoginForm.module.scss";
import LinkButton from "./LinkButton";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const { setUserIsLogged } = useLoginContext();
  const router = useRouter();

  return (
    <div className={styles.LoginFormBox}>
      <form className={styles.LoginForm}>
        <div className={styles.inputBox}>
          <label>Email</label>
          <input type="email" required />
        </div>
        <div className={styles.inputBox}>
          <label>Hasło</label>
          <input type="password" required />
        </div>
      </form>
      <div className={styles.formButtons}>
        <LinkButton href="/register">Załóż konto</LinkButton>
        <div className={styles.active}>
          <LinkButton
            onBtnClick={(e) => {
              e.preventDefault();
              setUserIsLogged(true);
              router.push("/");
            }}
            href="/">
            Zaloguj się
          </LinkButton>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
