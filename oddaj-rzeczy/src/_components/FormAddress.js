import styles from "../_styles/FormAddress.module.scss"
const FormAddress = () => {
return <div>
    <h3>Podaj adres oraz termin odbioru rzeczy przez kuriera</h3>
    <form className={styles.formAddressBox}>
        <div className={styles.form}>
            <span>Adres odbioru:</span>
            <div className={styles.inputBox}>
                <label>Ulica</label>
                <input type="text" name="street"/>
            </div>
            <div className={styles.inputBox}>
                <label>Miasto</label>
                <input type="text" name="city"/>
            </div>
            <div className={styles.inputBox}>
                <label>Kod pocztowy</label>
                <input type="number" name="postal"/>
            </div>
            <div className={styles.inputBox}>
                <label>Numer telefonu</label>
                <input type="number" name="phone"/>
            </div>
        </div>
        <div className={styles.form}>
            <span>Termin odbioru:</span>
            <div className={styles.inputBox}>
                <label>Data</label>
                <input type="date" name="date"/>
            </div>
            <div className={styles.inputBox}>
                <label>Godzina</label>
                <input type="time" name="hour"/>
            </div>
            <div className={styles.inputBox}>
                <label>Uwagi dla kuriera</label>
                <textarea name="more-info"></textarea>
            </div>
            
        </div>
    </form>
</div>
}

export default FormAddress