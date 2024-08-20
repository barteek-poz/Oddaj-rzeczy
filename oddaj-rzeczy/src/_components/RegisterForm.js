"use client";
import { registerSchema } from "@/_schemas/zodSchemas";
import { auth } from "@/app/firebase";
import { zodResolver } from "@hookform/resolvers/zod";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "../_styles/RegisterForm.module.scss";
import LinkButton from "./LinkButton";

const RegisterForm = () => {
  const [error, setError] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const registerUserHandler = async ({ email, password }) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        signIn("credentials", {
          email,
          password,
          redirect: true,
          callbackUrl: "/",
        });
        setError(false);
      })
      .catch((error) => setError(true));
  };

  return (
    <>
      <div className={styles.registerFormBox}>
        <form
          className={styles.registerForm}
          id="registerForm"
          onSubmit={handleSubmit(registerUserHandler)}>
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
          <div className={styles.inputBox}>
            <label>Powtórz hasło</label>
            <input
              type="password"
              name="password2"
              {...register("password2")}
            />
            {errors.password2 && <p>{errors.password2.message}</p>}
          </div>
        </form>
        <div className={styles.formButtons}>
          <LinkButton href="/login">Zaloguj się</LinkButton>
          <div className={styles.active}>
            <button type="submit" form="registerForm">
              Załóż konto
            </button>
          </div>
        </div>
      </div>
      {error && (
        <p className={styles.error}>
          Podany adres email występuje już w naszej bazie. Przejdź do strony
          logowania.
        </p>
      )}
    </>
  );
};

export default RegisterForm;
