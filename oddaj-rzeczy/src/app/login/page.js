import Image from "next/image";
import decoration from "../../../public/assets/Decoration.svg";
import styles from "../../_styles/RegisterPage.module.scss";
import LoginForm from "@/_components/LoginForm";

const LoginPage = () => {
  return (
    <div className={styles.registerPage}>
      <h1>Zaloguj się</h1>
      <Image src={decoration} />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
