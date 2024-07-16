import styles from "../_styles/RegisterForm.module.scss";
import LinkButton from "./LinkButton";
const RegisterForm = () => {
  return (
    <div className={styles.registerFormBox}>
      <form className={styles.registerForm}>
        <div className={styles.inputBox}>
          <label>Email</label>
          <input type="email" required />
        </div>
        <div className={styles.inputBox}>
          <label>Hasło</label>
          <input type="password" required />
        </div>
        <div className={styles.inputBox}>
          <label>Powtórz hasło</label>
          <input type="password" required />
        </div>
      </form>
      <div className={styles.formButtons}>
        <LinkButton href="/login">Zaloguj się</LinkButton>
        <div className={styles.active}>
          <LinkButton href="/">Załóż konto</LinkButton>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
