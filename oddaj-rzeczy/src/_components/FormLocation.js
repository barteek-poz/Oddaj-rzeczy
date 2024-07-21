import styles from "../_styles/FormLocation.module.scss";
const FormLocation = () => {
  return (
    <form className={styles.formLocation}>
      <div id="select">
        <h3>Lokalizacja:</h3>
        <select name="location" defaultValue="default">
          <option value="default" disabled>
            - wybierz -
          </option>
          <option value="poznan">Poznań</option>
          <option value="warszawa">Warszawa</option>
          <option value="katowice">Katowice</option>
          <option value="krakow">Kraków</option>
          <option value="wroclaw">wroclaw</option>
        </select>
            <p>Komu chcesz pomóc?</p>
        <div className={styles.checkboxes}>
          <div id="checkbox">
            <label>
              <input type="checkbox" value="kids" />
              <span>dzieciom</span>
            </label>
          </div>
          <div id="checkbox">
            <label>
              <input type="checkbox" value="mothers" />
              <span>samotnym matkom</span>
            </label>
          </div>
          <div id="checkbox">
            <label>
              <input type="checkbox" value="homeless" />
              <span>bezdomnym</span>
            </label>
          </div>
          <div id="checkbox">
            <label>
              <input type="checkbox" value="invalid" />
              <span>niepełnosprawnym</span>
            </label>
          </div>
          <div id="checkbox">
            <label>
              <input type="checkbox" value="elders" />
              <span>osobom starszym</span>
            </label>
          </div>
        </div>
          <div>
            <p>Wpisz nazwę konkretnej organizacji (opcjonalnie)</p>
            <input type="text" name="optional-organization"/>
          </div>
      </div>
    </form>
  );
};

export default FormLocation;

{
  /* <form>
      <div id="select">
        <h3>Lokalizacja:</h3>
        <select name="location" defaultValue="default">
          <option value="default" disabled>
            - wybierz -
          </option>
          <option value="poznan">Poznań</option>
          <option value="warszawa">Warszawa</option>
          <option value="katowice">Katowice</option>
          <option value="krakow">Kraków</option>
          <option value="wroclaw">wroclaw</option>
        </select>
      </div>
      <div id="checkbox">
      <label>
        <input type="checkbox" value="dzieciom" />
        <span>dzieciom</span>
      </label>
    </div>
    </form> */
}
