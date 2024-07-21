import Image from "next/image";
import tshirtIcon from "../../public/assets/Icon-1.svg";
import recycleIcon from "../../public/assets/Icon-4.svg";
import styles from "../_styles/FormSummary.module.scss"
const FormSummary = () => {
  return (
    <div className={styles.summary}>
      <h3>Podsumowanie Twojej darowizny</h3>
      <div>
        <span>Oddajesz</span>
        <div className={styles.iconBox}>
          <Image src={tshirtIcon} />
          <p>4 worki, ubrania w dobrym stanie, dzieciom</p>
        </div>
        <div className={styles.iconBox}>
          <Image src={recycleIcon} />
          <p>dla lokalizacji: Warszawa</p>
        </div>
      </div>
      <div className={styles.formSummaryBox}>
        <div className={styles.form}>
            <span>Adres odbioru:</span>
            <div className={styles.formRow}>
                <label>Ulica</label>
                <p>Prosta 51</p>
            </div>
            <div className={styles.formRow}>
                <label>Miasto</label>
                <p>Warszawa</p>
            </div>
            <div className={styles.formRow}>
                <label>Kod pocztowy</label>
                <p>90-209</p>
            </div>
            <div className={styles.formRow}>
                <label>Numer telefonu</label>
                <p>473 839 483</p>
            </div>
        </div>
        <div className={styles.form}>
            <span>Termin odbioru:</span>
            <div className={styles.formRow}>
                <label>Data</label>
                <p>17.10.2019</p>
            </div>
            <div className={styles.formRow}>
                <label>Godzina</label>
                <p>17:30</p>
            </div>
            <div className={styles.formRow}>
                <label>Uwagi dla kuriera</label>
                <p>Brak uwag</p>
            </div>
            
        </div>
    </div>
    </div>
  );
};

export default FormSummary;
