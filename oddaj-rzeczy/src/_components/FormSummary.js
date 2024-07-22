import Image from "next/image";
import tshirtIcon from "../../public/assets/Icon-1.svg";
import recycleIcon from "../../public/assets/Icon-4.svg";
import styles from "../_styles/FormSummary.module.scss";
const FormSummary = ({
  type,
  numOfBags,
  location,
  targets,
  street,
  city,
  postal,
  phone,
  date,
  time,
  info,
}) => {
  const calcBags = (numOfBags) => {
    let bags;
    if (numOfBags === "1") {
      bags = "worek"
    } else if (numOfBags > "1" && numOfBags < "5") {
      bags = "worki";
    } else if (numOfBags === "5") {
      bags = "worków";
    }
    return bags
  };

  return (
    <div className={styles.summary}>
      <h3>Podsumowanie Twojej darowizny</h3>
      <div>
        <span>Oddajesz</span>
        <div className={styles.iconBox}>
          <Image src={tshirtIcon} alt="tshirt-icon" />
          <p>
            {numOfBags} {calcBags(numOfBags)} , {type}, {...targets}
          </p>
        </div>
        <div className={styles.iconBox}>
          <Image src={recycleIcon} alt="recycle-icon" />
          <p>dla lokalizacji: {location}</p>
        </div>
      </div>
      <div className={styles.formSummaryBox}>
        <div className={styles.form}>
          <span>Adres odbioru:</span>
          <div className={styles.formRow}>
            <label>Ulica</label>
            <p>{street}</p>
          </div>
          <div className={styles.formRow}>
            <label>Miasto</label>
            <p>{city}</p>
          </div>
          <div className={styles.formRow}>
            <label>Kod pocztowy</label>
            <p>{postal}</p>
          </div>
          <div className={styles.formRow}>
            <label>Numer telefonu</label>
            <p>{phone}</p>
          </div>
        </div>
        <div className={styles.form}>
          <span>Termin odbioru:</span>
          <div className={styles.formRow}>
            <label>Data</label>
            <p>{date}</p>
          </div>
          <div className={styles.formRow}>
            <label>Godzina</label>
            <p>{time}</p>
          </div>
          <div className={styles.formRow}>
            <label>Uwagi dla kuriera</label>
            <p>{info}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSummary;
