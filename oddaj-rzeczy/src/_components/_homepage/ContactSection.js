import Image from "next/image";
import styles from "../../_styles/ContactSection.module.scss";
import decoration from "../../../public/assets/Decoration.svg";
import facebook from "../../../public/assets/facebook.svg"
import instagram from "../../../public/assets/instagram.svg"
import LinkButton from "../LinkButton";

const ContactSection = () => {
  return (
    <section className={styles.contactSection} id="contact">
      <form className={styles.contactForm}>
      <h2>Skontaktuj się z nami</h2>
      <Image src={decoration} alt="decoration" />
        <div className={styles.contactInputsBox}>
          <div className={styles.contactInput}>
            <label>Wpisz swoje imię</label>
            <input type="text" placeholder="Krzysztof" />
          </div>
          <div className={styles.contactInput}>
            <label>Wpisz swój email</label>
            <input type="email" placeholder="abc@xyz.pl" />
          </div>
        </div>
        <div className={styles.contactTextarea}>
          <label>Wpisz swoją wiadomość</label>
          <textarea
            type="text"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."></textarea>
        </div>
        <div className={styles.formBtn}>
        <LinkButton href="/">Wyślij</LinkButton>
        </div>
      </form>
        <p className={styles.copyright}>Copyright by CodersLab</p>
      <div className={styles.icons}>
        <div>
          <Image src={facebook} alt="facebook-icon"/>
          <Image src={instagram} alt="instagram-icon"/>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
