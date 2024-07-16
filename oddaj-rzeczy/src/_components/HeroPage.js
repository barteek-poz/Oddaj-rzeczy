import Image from "next/image";
import heroImg from "../../public/assets/Home-Hero-Image.jpg";
import decoration from "../../public/assets/Decoration.svg";
import styles from "../_styles/HeroPage.module.scss";
import LinkButton from "./LinkButton";

const HeroPage = () => {
  return (
    <div className={styles.heroBox}>
      <div className={styles.heroImg}>
        <Image src={heroImg} fill placeholder="blur" />
      </div>
      <div className={styles.heroContent}>
        <h1>
          Zacznij pomagać! <br /> Oddaj niechciane rzeczy w zaufane ręce
        </h1>
        <Image src={decoration} />
        <div className={styles.heroBtns}>
          <LinkButton href="/login">Oddaj rzeczy</LinkButton>
          <LinkButton href="/">Zorganizuj zbiórkę</LinkButton>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
