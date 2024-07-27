"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "../_styles/LoginForm.module.scss";
import LinkButton from "./LinkButton";
import { loginSchema } from "@/_schemas/zodSchemas";

const LoginForm = () => {
  const [error, setError] = useState(false);
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const logInHandler = async ({ email, password }) => {
    signIn("credentials", {
      email,
      password,
      redirect: false,
    }).then(({ ok }) => {
      if (ok) {
        setError(false);
        router.push("/");
      } else {
        setError(true);
        reset({ email: "", password: "" });
      }
    });
  };
  return (
    <>
      <div className={styles.LoginFormBox}>
        <form
          name="loginForm"
          id="loginForm"
          className={styles.LoginForm}
          onSubmit={handleSubmit(logInHandler)}>
          <div className={styles.inputBox}>
            <label>Email</label>
            <input type="email" name="email" {...register("email")} />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div className={styles.inputBox}>
            <label>Hasło</label>
            <input type="password" name="password" {...register("password")} />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
        </form>
        <div className={styles.formButtons}>
          <LinkButton href="/register">Załóż konto</LinkButton>
          <div className={styles.active}>
            <button type="submit" form="loginForm">
              Zaloguj
            </button>
          </div>
        </div>
      </div>
      {error && (
        <p className={styles.error}>
          Brak użytkownika o takim adresie email. Musisz najpierw założyć konto,
          aby się zalogować.
        </p>
      )}
    </>
  );
};

export default LoginForm;
