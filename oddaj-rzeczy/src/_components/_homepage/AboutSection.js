import Image from "next/image";
import peopleImg from "../../../public/assets/People.jpg";
import signatureImg from "../../../public/assets/Signature.svg";
import decoration from "../../../public/assets/Decoration.svg";
import styles from "../../_styles/AboutSection.module.scss"

const AboutSection = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.aboutContent}>
        <h2>O nas</h2>
        <Image src={decoration} />
        <p>
          Nori grape silver beet broccoli kombu beet greens fava bean potato
          quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil
          turnip greens parsnip.
        </p>
        <Image src={signatureImg} className={styles.aboutSignature} />
      </div>
      <div className={styles.aboutImg}>
        <Image src={peopleImg} placeholder="blur" fill/>
      </div>
    </section>
  );
};

export default AboutSection;
