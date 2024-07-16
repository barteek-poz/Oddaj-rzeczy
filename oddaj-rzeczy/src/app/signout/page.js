import Image from "next/image";
import decoration from "../../../public/assets/Decoration.svg";
import LinkButton from "@/_components/LinkButton";
import styles from "../../_styles/SignoutPage.module.scss"
const SignoutPage = () => {
  return (
    <div className={styles.signoutPage}>
      <h1>Wylogowanie nastąpiło pomyślnie!</h1>
      <Image src={decoration} alt="decoration"/>
      <div className={styles.active}>
        <LinkButton href="/">Strona główna</LinkButton>
      </div>
    </div>
  );
};

export default SignoutPage;
