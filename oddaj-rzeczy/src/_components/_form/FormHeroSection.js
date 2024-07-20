import Image from "next/image";
import heroImg from "../../../public/assets/Form-Hero-Image.jpg";
import decoration from "../../../public/assets/Decoration.svg";
import styles from "../../_styles/HeroSection.module.scss";
import FormStep from "../FormStep";

const FormHeroSection = () => {
  return (
    <section className={styles.heroBox} id="start">
      <div className={styles.heroImg}>
        <Image src={heroImg} fill placeholder="blur" alt="hero image" />
      </div>
      <div className={styles.heroContent}>
        <h1>
          Oddaj rzeczy, których już nie chcesz <br /> POTRZEBUJĄCYM
        </h1>
        <Image src={decoration} alt="decoration" />
        <span>Wystarczą 4 proste kroki:</span>
        <div className={styles.heroSteps}>
          <FormStep number="1" description="Wybierz rzeczy" />
          <FormStep number="2" description="Spakuj je w worki" />
          <FormStep number="3" description="Wybierz fundację" />
          <FormStep number="4" description="Zamów kuriera" />
        </div>
      </div>
    </section>
  );
};

export default FormHeroSection;
