import Image from "next/image";
import decoration from "../../../public/assets/Decoration.svg";
import RegisterForm from "@/_components/RegisterForm";
import styles from "../../_styles/RegisterPage.module.scss"

const RegisterPage = () => {
  return (
    <div className={styles.registerPage}>
      <h1>Załóż konto</h1>
      <Image src={decoration} />
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
