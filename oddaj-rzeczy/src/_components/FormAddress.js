import styles from "../_styles/FormAddress.module.scss";
const FormAddress = ({
  street,
  city,
  postal,
  phone,
  date,
  time,
  info,
  updateForm,
}) => {
  return (
    <div>
      <h3>Podaj adres oraz termin odbioru rzeczy przez kuriera</h3>
      <div className={styles.formAddressBox}>
        <div className={styles.form}>
          <span>Adres odbioru:</span>
          <div className={styles.inputBox}>
            <label>Ulica</label>
            <input
              type="text"
              name="street"
              value={street}
              onChange={(e) => {
                updateForm({ street: e.target.value });
              }}
            />
          </div>
          <div className={styles.inputBox}>
            <label>Miasto</label>
            <input type="text" name="city" value={city} onChange={(e) => {
                updateForm({ city: e.target.value });
              }}/>
          </div>
          <div className={styles.inputBox}>
            <label>Kod pocztowy</label>
            <input type="number" name="postal" value={postal} onChange={(e) => {
                updateForm({ postal: e.target.value });
              }}/>
          </div>
          <div className={styles.inputBox}>
            <label>Numer telefonu</label>
            <input type="number" name="phone" value={phone} onChange={(e) => {
                updateForm({ phone: e.target.value });
              }}/>
          </div>
        </div>
        <div className={styles.form}>
          <span>Termin odbioru:</span>
          <div className={styles.inputBox}>
            <label>Data</label>
            <input type="date" name="date" value={date} onChange={(e) => {
                updateForm({ date: e.target.value });
              }}/>
          </div>
          <div className={styles.inputBox}>
            <label>Godzina</label>
            <input type="time" name="time" value={time} onChange={(e) => {
                updateForm({ time: e.target.value });
              }}/>
          </div>
          <div className={styles.inputBox}>
            <label>Uwagi dla kuriera</label>
            <textarea name="more-info" value={info} onChange={(e) => {
                updateForm({ info: e.target.value });
              }}></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAddress;
