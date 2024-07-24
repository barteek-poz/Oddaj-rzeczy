"use client";
import { useLoginContext } from "@/_context/LoginContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "../_styles/LoginForm.module.scss";
import LinkButton from "./LinkButton";
import useFormValidate from "@/_hooks/useFormValidate";
import { signIn } from "next-auth/react";

const LoginForm = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [error, setError] = useState(false);
  const { setUserIsLogged, setUserEmail } = useLoginContext();
  const router = useRouter();
  const { formIsValid } = useFormValidate(emailValue, passwordValue);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (formIsValid) {
      setUserIsLogged(true);
      setUserEmail(emailValue);
      router.push("/");
    } else setError(true);
  };
  const singInHandler = async () => {
    signIn("credentials", {
      emailValue,
      passwordValue,
      redirect: false,
     
    }).then(({ok}) => {
      if(ok) {
        setError(false)
        router.push('/')
      } else {
        setError(true)
        setEmailValue('')
        setPasswordValue('')
      }
    })}
  return (
    <>
      <div className={styles.LoginFormBox}>
        <form className={styles.LoginForm}>
          <div className={styles.inputBox}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              required
              value={emailValue}
              onChange={(e) => {
                setEmailValue(e.target.value);
                setError(false);
              }}
            />
          </div>
          <div className={styles.inputBox}>
            <label>Hasło</label>
            <input
              type="password"
              required
              value={passwordValue}
              onChange={(e) => {
                setPasswordValue(e.target.value);
                setError(false);
              }}
            />
          </div>
        </form>

        <div className={styles.formButtons}>
          <LinkButton href="/register">Załóż konto</LinkButton>
          <div className={styles.active}>
            <LinkButton
              onBtnClick={singInHandler}
              href={"/login"}>
              Zaloguj
            </LinkButton>
          </div>
        </div>
      </div>
      {error && (
        <p className={styles.error}>
          Wystąpił błąd w formularzu. Upewnij się, że podałes poprawny adres
          email oraz hasło
        </p>
      )}
    </>
  );
};

export default LoginForm;
