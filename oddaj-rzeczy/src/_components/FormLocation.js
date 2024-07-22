import styles from "../_styles/FormLocation.module.scss";
const FormLocation = ({ location, targets, organization, updateForm }) => {
  const updateTargetsArray = (targetValue) => {
    const filteredTarget = targets.filter((target) => target === targetValue);
    if (filteredTarget.length > 0) {
      const updatedTargets = targets.filter(
        (target) => target !== targetValue
      );

      updateForm({ targets: [...updatedTargets] });
    } else updateForm({ targets: [...targets, targetValue] });
  };

  return (
    <div className={styles.formLocation}>
      <div id="select">
        <h3>Lokalizacja:</h3>
        <select
          name="location"
          defaultValue={location ? location : "default"}
          onChange={(e) => updateForm({ location: e.target.value })}>
          <option value="default" disabled>
            - wybierz -
          </option>
          <option value="Poznań">Poznań</option>
          <option value="Warszawa">Warszawa</option>
          <option value="Katowice">Katowice</option>
          <option value="Kraków">Kraków</option>
          <option value="Wrocław">Wroclaw</option>
        </select>
        <p>Komu chcesz pomóc?</p>
        <div className={styles.checkboxes}>
          <div id="checkbox">
            <label>
              <input
                type="checkbox"
                checked={
                  targets.filter((target) => target === "dzieciom").length > 0
                }
                value="dzieciom"
                onChange={(e) => updateTargetsArray(e.target.value)}
              />
              <span>dzieciom</span>
            </label>
          </div>
          <div id="checkbox">
            <label>
              <input
                type="checkbox"
                value="samotnym matkom"
                checked={
                  targets.filter((target) => target === "samotnym matkom").length > 0
                }
                onChange={(e) => updateTargetsArray(e.target.value)}
              />
              <span>samotnym matkom</span>
            </label>
          </div>
          <div id="checkbox">
            <label>
              <input
                type="checkbox"
                value="bezdomnym"
                checked={
                  targets.filter((target) => target === "bezdomnym").length > 0
                }
                onChange={(e) => updateTargetsArray(e.target.value)}
              />
              <span>bezdomnym</span>
            </label>
          </div>
          <div id="checkbox">
            <label>
              <input
                type="checkbox"
                value="niepełnosprawnym"
                checked={
                  targets.filter((target) => target === "niepełnosprawnym").length > 0
                }
                onChange={(e) => updateTargetsArray(e.target.value)}
              />
              <span>niepełnosprawnym</span>
            </label>
          </div>
          <div id="checkbox">
            <label>
              <input
                type="checkbox"
                value="osobom starszym"
                checked={
                  targets.filter((target) => target === "osobom starszym").length > 0
                }
                onChange={(e) => updateTargetsArray(e.target.value)}
              />
              <span>osobom starszym</span>
            </label>
          </div>
        </div>
        <div>
          <p>Wpisz nazwę konkretnej organizacji (opcjonalnie)</p>
          <input
            type="text"
            name="optional-organization"
            value={organization}
            onChange={(e) => {updateForm({organization: e.target.value})}}
          />
        </div>
      </div>
    </div>
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
