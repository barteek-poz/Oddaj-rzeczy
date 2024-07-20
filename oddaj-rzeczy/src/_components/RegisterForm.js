"use client";
import { useRouter } from "next/navigation";
import styles from "../_styles/RegisterForm.module.scss";
import LinkButton from "./LinkButton";
import useFormValidate from "@/_hooks/useFormValidate";
import { useLoginContext } from "@/_context/LoginContext";
import { useState } from "react";

const RegisterForm = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [password2Value, setPassword2Value] = useState("");
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
  return (
    <>
      <div className={styles.registerFormBox}>
        <form className={styles.registerForm}>
          <div className={styles.inputBox}>
            <label>Email</label>
            <input
              type="email"
              value={emailValue}
              onChange={(e) => {
                setEmailValue(e.target.value);
                setError(false);
              }}
              required
            />
          </div>
          <div className={styles.inputBox}>
            <label>Hasło</label>
            <input
              type="password"
              value={passwordValue}
              onChange={(e) => {
                setPasswordValue(e.target.value);
                setError(false);
              }}
              required
            />
          </div>
          <div className={styles.inputBox}>
            <label>Powtórz hasło</label>
            <input
              type="password"
              value={password2Value}
              onChange={(e) => {
                setPassword2Value(e.target.value);
                setError(false);
              }}
              required
            />
          </div>
        </form>
        <div className={styles.formButtons}>
          <LinkButton href="/login">Zaloguj się</LinkButton>
          <div className={styles.active}>
            <LinkButton
              href={formIsValid ? "/" : "register"}
              onBtnClick={(e) => formSubmitHandler(e)}>
              Załóż konto
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

export default RegisterForm;
