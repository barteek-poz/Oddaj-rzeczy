import Image from "next/image";
import heroImg from "../../public/assets/Home-Hero-Image.jpg";
import decoration from "../../public/assets/Decoration.svg";
import styles from "../_styles/HeroSection.module.scss";
import LinkButton from "./LinkButton";

const HeroSection = () => {
  return (
    <section className={styles.heroBox} id="start">
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
    </section>
  );
};

export default HeroSection;
